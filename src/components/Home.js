
import React,{Component} from 'react';
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'
import SearchProduct from './SearchProduct'


class Home extends Component  {

    state={
        searchProduct:"",
        price_sort:1,
        orderType:"instock"
    }

    handleSearch=(e) =>{
        
        this.setState({searchProduct:e.target.value})
    }

    handleRatingChange=(e) =>{
      
        this.setState({
           price_sort:parseInt(e.target.value),
        })
      }

      handleOrderChange=(e) =>{
     
      
        this.setState({
           
          orderType:e.target.value
        })
      }

    render(){
        var  {productData} = this.props
        var productAvailable;
        productAvailable = productData.filter( product => (product.visible !== false))
        
        
        
        let filterProducts=productAvailable.filter((product) =>{
            return product.product_title.toLowerCase().includes(this.state.searchProduct) 
        })
        if(this.state.price_sort == 1){
        var filterByPrice = filterProducts.sort(function(a, b){
            return a.product_price-b.product_price
        })
        }
        else{
            var filterByPrice = filterProducts.sort(function(a, b){
                return b.product_price-a.product_price
            })
        }
        var filterByAvailablity=filterByPrice.filter((t) =>{
            return t.orderType === this.state.orderType })

        const productDataList = filterByAvailablity.length ? (filterByAvailablity.map(product => {
            return (<div className="item  col-xs-4 col-lg-4" key={product.id}>
            <div className="thumbnail">
                <img className="group list-group-image" src={product.product_image} alt="unable to load image" />
                <div className="caption">
                    <h4 className="group inner list-group-item-heading">
                        <Link to ={'/'+product.id}>
                        {product.product_title}</Link></h4>
                    <p className="group inner list-group-item-text break-word">
                       {product.product_desc}</p>
                    <div className="row marginForPrice">
                        <div className="col-xs-12 col-md-6">
                            <p className="lead">
                            ₹{product.product_price}</p>
                            
                        </div>
                        <div className="col-xs-12 col-md-6">
                      <Link to ={'/'+product.id} className="btn btn-info">View Details</Link>
                        </div>
                        
                       

                    </div>
                </div>
            </div>
        </div>)
        })) : (<div><h1>No Records Found <span className="fa fa-frown-o"></span></h1> </div>)


        return(
           <div className="container">
               <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h2> Welcome to Paint Book</h2>

                    </div>
                    <div className="col-md-4  marginForSearch"><SearchProduct handleSearch={this.handleSearch}/></div>

               </div>
              
    <div className="row marginHome">
       <div className="col-md-2">
            <div className="row">

            <div className="col-md-12">
            <div className="form-group"><label className="col-md-12 control-label">Price Sort By</label>
            <div className="col-md-12">
                <select className="form-control" onChange={this.handleRatingChange}   value={this.state.price_sort}> 
                    <option value="1">Low to high</option>
                    <option value="2"> High to Low</option>
                </select>
                </div>
            </div>
            </div>
            <div className="col-md-12 marginForAvailablity">
                
            <div className="form-group">
              <label className="col-md-12 control-label" >Availablity</label>
              <div className="col-md-12" >
              <input type="radio" id="instock" name="stock" value="instock" checked={this.state.orderType === "instock"} onChange={this.handleOrderChange} />
                    <label htmlFor="instock">In Stock</label>
                </div>
                <div className="col-md-12" >
            <input className="marginForBs" type="radio" id="outofstock" onChange={this.handleOrderChange}  name="stock" value="outofstock" checked={this.state.orderType === "outofstock"}/>
            <label htmlFor="outofstock">Out of Stock</label>

              </div>
             
            </div>
            </div>
            </div>

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

const mapStateToProps =  (state) =>{
    return {
        productData:state.productData
        
    }
}

export default connect(mapStateToProps,null)(Home)