
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Trash extends Component {

    render() {
        
        var { productData } = this.props
        
        productData = productData.filter(product => (product.visible !== true))
        const productDataList = productData.length ? (productData.map(product => {
            return (<div className="item  col-xs-4 col-lg-4" key={product.id}>
                <div className="thumbnail">
                    <img className="group list-group-image" src={product.product_image} alt=" unable to load image" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            {product.product_title}</h4>
                        <p className="group inner list-group-item-text break-word">
                            {product.product_desc}</p>
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <p className="lead">
                                    ₹{product.product_price}</p>

                            </div>
                            <div className="col-xs-12 col-md-6">
                                <a className="btn btn-success " onClick={() => this.props.restoreProduct(product.id)}>Restore</a>


                            </div>
                            <div className="col-xs-12 col-md-6">
                                <a className="btn btn-danger " onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item permanenetly?')) this.props.deleteProduct(product.id) }}>Remove</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        })) : (<div> Seems Nothing there in trash :)</div>)

        return (
            <div className="container">


                <div className="row">
                    <div className="col-md-4">
                        <div className="scp-breadcrumb">
                            <ul className="breadcrumb">
                                <li> <Link to="/">Home</Link></li>
                                <li className="active">Trash</li>
                            </ul>
                        </div>

                    </div>

                </div>
                <h2>Restore/Remove Products</h2>
                <div className="row marginHome">
                    <div className="col-md-2">


                    </div>
                    <div className="col-md-10">
                        <div id="products" className="row list-group">


                            {productDataList}


                        </div>
                    </div>
                </div>



            </div>)
    }


}

const mapDispathToProps = (dispatch) => (
    {
        restoreProduct: (id) => { dispatch({ type: "RESTORE_PRODUCT", id: id }) },
        deleteProduct: (id) => { dispatch({ type: "DELETE_PRODUCT", id: id }) }

    })


const mapStateToProps = (state) => {
    return {
        productData: state.productData

    }
}

export default connect(mapStateToProps, mapDispathToProps)(Trash)