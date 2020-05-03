
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'


const Sidenav = () => {


  return (

    <Fragment>

      <div id="wrapper" className="active">

        <Link to="/addproduct" className="float">
          <i className="fa fa-plus my-float"></i>
        </Link>


        <div id="sidebar-wrapper">
          <ul id="sidebar_menu" className="sidebar-nav">
            <li className="sidebar-brand"><a id="menu-toggle" href="#">Menu<span id="main_icon" className="glyphicon glyphicon-align-justify"></span></a></li>
          </ul>
          <ul className="sidebar-nav" id="sidebar">
            <li><Link to="/" className="pointerC">Home<span className="sub_icon glyphicon fa fa-home fa-2x"></span></Link></li>
            <li><Link to="/addproduct">Product<span className="sub_icon glyphicon  fa fa-plus fa-2x"></span></Link></li>
            <li><Link to="/Trash">Trash<span className="sub_icon glyphicon  fa fa-trash-o fa-2x"></span></Link></li>
          </ul>
        </div>

        <div id="page-content-wrapper">

          <div className="page-content inset">
            <div className="row">
              <div className="col-md-12">

              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )


}

export default Sidenav;




