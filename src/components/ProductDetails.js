import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class ProductDetails extends Component {


    state = {
        id: "",
        product_title: "",
        product_desc: "",
        product_image: "",
        product_price: "",
        product_rating: 0,
        orderType: "instock",
        remainingReviews: 5,
        checkInvalidReq: false
    }


    componentDidMount() {
        console.log(this.props)

        let id = this.props.match.params.product_id



        const { productData } = this.props
        var prodId = []
        const productIds = productData.map(product => {
            prodId.push(product.id)
        })
        var fetchSingleProduct = productData.filter(product => {

            return id == product.id

        });
       
        var checkUrl = prodId.includes(parseFloat(this.props.match.params.product_id))
        if (checkUrl) {

            this.setState({
                id: fetchSingleProduct[0].id,
                product_title: fetchSingleProduct[0].product_title,
                product_desc: fetchSingleProduct[0].product_desc,
                product_image: fetchSingleProduct[0].product_image,
                product_price: fetchSingleProduct[0].product_price,
                product_rating: parseInt(fetchSingleProduct[0].product_rating),
                orderType: fetchSingleProduct[0].orderType,



            })
        }
        else {
            this.setState({
                checkInvalidReq: checkUrl
            })
        }






    }




    render() {
        
        var badRating = this.state.remainingReviews - this.state.product_rating
        console.log(this.state.checkInvalidReq)


        return (
            <Fragment>
                {this.state.checkInvalidReq == false ?
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="scp-breadcrumb">
                                    <ul className="breadcrumb">
                                        <li> <Link to="/">Home</Link></li>
                                        <li className="active">Product Details</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="container">
                            <div className="card">
                                <div className="container-fliud">
                                    <div className="wrapper row">
                                        <div className="preview col-md-6">

                                            <div className="preview-pic tab-content">
                                                <div className="tab-pane active" id="pic-1"><img height="300px" src={this.state.product_image} alt="unable to load image" /></div>
                                                <div className="tab-pane" id="pic-2"><img height="300px" src={this.state.product_image} alt="unable to load image" /></div>
                                                <div className="tab-pane" id="pic-3"><img height="300px" src={this.state.product_image} alt="unable to load image" /></div>

                                            </div>
                                            <ul className="preview-thumbnail nav nav-tabs">
                                                <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={this.state.product_image} alt="unable to load image" /></a></li>
                                                <li><a data-target="#pic-2" data-toggle="tab"><img src={this.state.product_image}  alt="unable to load image"/></a></li>
                                                <li><a data-target="#pic-3" data-toggle="tab"><img src={this.state.product_image}  alt="unable to load image"/></a></li>

                                            </ul>

                                        </div>
                                        <div className="details col-md-6">
                                            <h3 className="product-title">{this.state.product_title}</h3>
                                            <div className="rating">
                                                <div className="stars">
                                                    {<span>{Array.from(Array(this.state.product_rating), (e, i) => {
                                                        return <span key={i}><span className="fa fa-star checked"></span></span>
                                                    })}</span>}

                                                    {this.state.remainingReviews >= 1 ? <span>{Array.from(Array(badRating), (e, i) => {
                                                        return <span key={i}><span className="fa fa-star"></span></span>
                                                    })}</span> : <Fragment></Fragment>}


                                                </div>
                                                <span className="review-no">{Math.floor(Math.random() * 100)} reviews</span>
                                            </div>
                                            <p className="product-description break-word">{this.state.product_desc}</p>
                                            <h4 className="price"> ₹{this.state.product_price}</h4>
                                            <p className="vote"><strong>{Math.floor(Math.random() * 100)}%</strong> of buyers enjoyed this product! <strong>({Math.floor(Math.random() * 100)} votes)</strong></p>
                                             <h5 className="sizes">Availablity
                                                    {this.state.orderType == "instock" ? <span className="size  green" data-toggle="tooltip" title="small">{this.state.orderType}</span> :
                                                    <span className="size  red" data-toggle="tooltip" title="small">{this.state.orderType}</span>}


                                            </h5>

                                            <div className="action">
                                                <button className="add-to-cart btn btn-default marginForbtn" type="button">add to cart</button>
                                                <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span> <span> {Math.floor(Math.random() * 100)}</span></button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></div> : <Fragment></Fragment>}</Fragment>)

    }

}

const mapStateToProps = (state) => {
    return {
        productData: state.productData
    }
}


export default connect(mapStateToProps, null)(ProductDetails)