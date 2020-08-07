import React, { useContext, useState, useEffect } from 'react';
import { Link } from "gatsby"


const Header = (props) => {

  return (
    <>
    <div   name="header" className={`header`} > 
      <div className="container">
         <Link to={`/`} className="logo " >
        <img src={props.logoUrl} alt={props.logoAlt}  />
        </Link> 
     
        <div className="menuIcon" role = "button" >
        <div />
        <div />
        <div />
      </div>

      </div>
    </div >
 </>
  )
}



export default Header
