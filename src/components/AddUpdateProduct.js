
import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddProduct from './AddProduct'


class AddUpdateProduct extends Component {

    state = {
        currentIndex: -1,
    }

    handleEdit = (productId) => {
    
        this.setState({
            currentIndex: productId
        })
    }

    onAddOrEdit = () => {

        if (this.state.currentIndex == -1) { }

        else {
            this.setState({ currentIndex: -1 })
        }
    }


    render() {
        
        var { productData } = this.props;

        productData = productData.filter(product => (product.visible !== false))
        const TableList = productData.length ? (productData.map(product => {
            return (<tr className="myMargin" key={product.id}>
                <td>{product.product_title}</td>
                <td className="break-word">{product.product_desc}</td>
                <td>{product.product_price}</td>
                <td>{product.product_rating}</td>
                <td>{product.orderType}</td>
                <td> <button className="btn btn-warning" onClick={() => this.handleEdit(product.id)}>Edit</button></td>
                <td> <button className="btn btn-danger" onClick={(e) => { if (window.confirm('Are you sure you wish to trash this product?')) this.props.trashProductProduct(product.id) }} >Trash</button></td>
            </tr>)
        })) : (<div> Seems you do not have any products added :( :</div>)

        return (
            <div className="container">

                <AddProduct currentIndex={this.state.currentIndex} onAddOrEdit={this.onAddOrEdit} />

                <div className="col-md-10 col-md-offset-1">
                    <div id="" className="row list-group">


                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Product Title</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Product Rating</th>
                                    <th>Availability</th>
                                    <th>Edit</th>
                                    <th>Trash</th>
                                </tr>
                            </thead>
                            <tbody>

                                {TableList}
                            </tbody>
                        </table>


                    </div>
                </div>

            </div>)
    }


}

const mapDispathToProps = (dispatch) => ({
    trashProductProduct: (id) => { dispatch({ type: "TRASH_PRODUCT", id: id }) },
    // editIndex:(id) =>{dispatch({type:"EDIT_PRODUCT",id:id})},

})


const mapStateToProps = (state) => {
    return {
        productData: state.productData


    }
}

export default connect(mapStateToProps, mapDispathToProps)(AddUpdateProduct)