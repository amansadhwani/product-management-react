import React,{Fragment} from 'react';


function  SearchProduct(props){
    return(<Fragment>

<div className="form-group">
<label className="col-md-1 control-label" ><span className="fa fa-search fa-class-spcefic"></span></label>
              <div className="col-md-8">
           
              <input type="text" placeholder="search product by name" onChange={props.handleSearch} className="form-control"/>
                
              </div>
            </div>

            
        </Fragment>)
    }



export default SearchProduct;