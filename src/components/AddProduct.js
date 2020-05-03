
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
class AddProduct extends Component {



  state = {
    ...this.returnStateObject()
  }

  returnStateObject() {

    if (this.props.currentIndex == -1)
      return {
        product_title: "",
        product_desc: "",
        product_price: "",
        product_image: "",
        product_rating: 1,
        orderType: "instock"

      }
    else
      return this.props.currentIndex
  }

  componentDidUpdate(prevProps) {

    if (prevProps.currentIndex != this.props.currentIndex) {

      let singleProduct = this.props.productData.filter(product => {
        return this.props.currentIndex == product.id

      });

      if (singleProduct.length != 0) {
        this.setState({
          id: this.props.currentIndex,
          product_title: singleProduct[0].product_title,
          product_desc: singleProduct[0].product_desc,
          product_price: singleProduct[0].product_price,
          product_image: singleProduct[0].product_image,
          product_rating: singleProduct[0].product_rating,
          orderType: singleProduct[0].orderType,
          flag: singleProduct[0].flag
        })

      }
      else {
        this.setState({
          product_title: "",
          product_desc: "",
          product_price: "",
          product_image: "",
          product_rating: 1,
          orderType: "instock"
        })
      }
    }
  }




  handleProductNameChange = (e) => {
    this.setState({
      product_title: e.target.value

    })
  }


  handleProductDescChange = (e) => {
    this.setState({
      product_desc: e.target.value,

    })
  }

  handleRatingChange = (e) => {
    this.setState({
      product_rating: e.target.value,
    })
  }

  handlePriceChange = (e) => {
    this.setState({

      product_price: parseInt(e.target.value),
    })
  }

  handleOrderChange = (e) => {


    this.setState({

      orderType: e.target.value
    })
  }



  handleProductImage = (e) => {
    this.setState({
      product_image: e.target.value
    })
  }




  // this.setState({flag:abc })



  /*handleUpdate=() =>{
    //this.props.currentIndex=-1,
    this.props.updateProduct(this.state)
  }*/





  handleSubmit = (e) => {


    e.preventDefault();
    var checkImageUrl = this.state.product_image;
    checkImageUrl = checkImageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null
    this.props.onAddOrEdit()
    if (this.props.currentIndex == -1 && checkImageUrl) {

      this.props.addProduct(this.state)
      this.setState({
        product_title: "",
        product_desc: "",
        product_price: "",
        product_image: "",
        product_rating: 1,
        orderType: "instock"
      })
    }
    else if (checkImageUrl == false) {
      alert("Invalid Image ( Url should end with jpeg or jpg or gif or png) ")

    }
    else {
      this.props.updateProduct(this.state)
    }
  }

  render() {
    
    const { productData } = this.props
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-4">
            <div className="scp-breadcrumb">
              <ul className="breadcrumb">
                <li> <Link to="/">Home</Link></li>
                <li className="active">Add/Update Products</li>
              </ul>
            </div>

          </div>

        </div>
        <h2>Add New Product</h2>


        <div className="col-md-offset-3 col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading clearfix">

              <h3 className="panel-title">Please Enter Product  Details</h3>
            </div>

            <div className="panel-body">
              <form className="form-horizontal row-border" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="col-md-4 control-label" >Enter Product Title</label>
                  <div className="col-md-6">
                    <input type="text" name="regular" maxLength="50" minLength="10" className="form-control" required onChange={this.handleProductNameChange} value={this.state.product_title} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label" >Enter Product Description</label>
                  <div className="col-md-6">

                    <input maxLength="170" minLength="150" name="regular" type="text" className="form-control heightProd" required onChange={this.handleProductDescChange} value={this.state.product_desc} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" >Product Image Url</label>
                  <div className="col-md-6">

                    <input type="text" className="form-control" required onChange={this.handleProductImage} value={this.state.product_image} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label" >Select Product Rating</label>
                  <div className="col-md-6">
                    <select className="form-control" onChange={this.handleRatingChange} value={this.state.product_rating}>
                      <option >1</option>
                      <option >2</option>
                      <option >3</option>
                      <option >4</option>
                      <option >5</option>

                    </select>

                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" >Enter Product Price</label>
                  <div className="col-md-6">
                    <input type="number" name="regular" min="100" max="99999" required className="form-control" onChange={this.handlePriceChange} value={this.state.product_price} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" ></label>
                  <div className="col-md-6" >
                    <input type="radio" id="instock" name="stock" value="instock" checked={this.state.orderType === "instock"} onChange={this.handleOrderChange} />
                    <label htmlFor="instock">In Stock</label>

                    <input className="marginForBs" type="radio" id="outofstock" onChange={this.handleOrderChange} name="stock" value="outofstock" checked={this.state.orderType === "outofstock"} />
                    <label htmlFor="outofstock">Out of Stock</label>

                  </div>

                </div>

                <div className="col-md-offset-4 col-md-6">
                  {this.props.currentIndex == -1 ?
                    <button className="btn btn-primary " type="submit">Add Product</button> : <button className="btn btn-primary" type="submit" >Update Product</button>}
                </div>

              </form>

            </div>
          </div>
        </div>

      </div>

    );
  }
}

const mapDispathToProps = (dispatch) => (
  {
    addProduct: (id) => { dispatch({ type: "ADD_PRODUCT", id: id }) },
    updateProduct: (id) => { dispatch({ type: "UPDATE_PRODUCT", id: id }) }

  })

const mapStateToProps = (state) => {
  return {
    productData: state.productData,


  }
}




export default connect(mapStateToProps, mapDispathToProps)(AddProduct)
