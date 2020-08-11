import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"


const Header = (props) => {

const MenuItems = () =>{
  return(
    <ul className="menu"> 
    <li className="home">
        <a href="index.html">Home</a>
        <ul className="submenu">
            <li><a href="index.html">Home 01</a></li>
            <li><a href="index-v2.html">Home 02</a></li>
            <li><a href="index-v3.html">Home 03</a></li>
            <li><a href="index-v4.html">Home 04</a></li>
            <li><a href="index-v5.html">Home 05</a></li>
            <li><a href="index-v6.html">Home 06</a></li>
            <li><a href="index-v7.html">Home 07</a></li>
        </ul>
    </li>
    <li><a href="overview.html">About Us</a></li> 
    <li><a href="services.html">Services</a>
        <ul className="submenu">
            <li><a href="services.html">Services</a></li>
            <li><a href="services-single.html">Services Single</a></li>
        </ul>
    </li>                               
    <li><a href="case-v1.html">Cases</a>
        <ul className="submenu">
            <li><a href="case-v1.html">Case V1</a></li>
            <li><a href="case-v2.html">Case V2</a></li>
            <li><a href="case-single-v1.html">Case Single V1</a></li>
            <li><a href="case-single-v2.html">Case Single V2</a></li>
        </ul>
    </li>  
    <li><a href="blog.html">News</a>
        <ul className="submenu"> 
            <li><a href="blog.html">Blog V1</a></li>
            <li><a href="blog-v2.html">Blog V2</a></li>
            <li><a href="blog-single.html">Blog single</a></li>
        </ul>
    </li>                                              
    <li><a href="partner.html">Pages</a>
        <ul className="submenu"> 
                <li><a href="history.html">History</a></li>
                <li><a href="partner.html">Partner</a></li>
                <li><a href="team-v1.html">Team V1</a></li>
                <li><a href="team-v2.html">Team V2</a></li>
                <li><a href="overview.html">Overview</a></li>
                <li><a href="header.html">Header</a></li>
            </ul>
        </li>
    <li><a href="contact.html">Contact Us</a></li>
</ul>
  )
}



  return (
    <>



<header id="header" className="header style-color clearfix">
                <div className="container">
                    <div className="header-wrap clearfix">
                        <div id="logo" className="logo">
                          <Link to={`/`} className="logo " >
                          <img src={props.logoUrl} alt={props.logoAlt}  />
                          </Link> 
                        </div>

                        <div className="nav-wrap">
                            <div className="btn-menu">
                                <span></span>
                            </div>

                            
                          <nav id="mainnav" className="mainnav">
                          <MenuItems />
                          </nav>
                        </div>
                    </div>
                </div>
            </header>


            <nav id="mainnav-mobi" className="mainnav" >
            <MenuItems />
            </nav>



 </>
  )
}



export default Header
