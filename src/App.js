import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Trash from './components/Trash'
import AddUpdateProduct from './components/AddUpdateProduct'
import ProductDetails from './components/ProductDetails'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidenav/>
      <Switch>
        <Route exact path='/' component={Home} />
       <Route path='/Trash' component={Trash} />
       <Route path='/addproduct' component={AddUpdateProduct} />
       
       <Route path='/:product_id' component={ProductDetails} />
       
        </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
