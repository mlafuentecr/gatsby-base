import React, { Children } from "react"
import LayoutIndex from "../components/layoutIndex"
import { FaCodepen } from 'react-icons/fa';
import { TiDeviceDesktop } from "react-icons/ti";

const IndexPage = props => {

  const Curve =(props)=>{
    return <div className={props.classname} >
      <svg class="svgCurve" fill="#44405a" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 1 1024 107" preserveAspectRatio="none"><path class="st4" d="M0 0h1024v77.3c-49-20.1-120.5-42.4-193.2-42.1-128.9.5-159.8 72.3-255.8 72.3-89.1 0-134.7-80.2-245-82-110.4-1.8-160.9 57.2-280 59.2-17.2.3-33.9-1.8-50-5.7V0z"></path></svg>
      </div>
  }


  return (
    <LayoutIndex>
      <div className="section color1">
        <div className="wrap">
          <div className="container mainText">
            <div className="title-section">
              <h1 className="title full">Why Choose Us</h1>
              <h2>Why Choose Us2</h2>
              <h3>Why Choose Us</h3>
            </div>
            <div className="post-choose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate.
              </p>
            </div>
          </div>
          </div>
      </div>

      <Curve  classname="color2 hr-curve" />


        <div className="section color2">
        <div className="wrap">
          <div className="container mainText">
            <div className="title-section">
              <h1 className="title full">Why Choose Us</h1>
              <FaCodepen  color="primary" />xxxx
             
              <div className="circleIcon"> <TiDeviceDesktop   /></div>
              <h2>Why Choose Us2</h2>
              <h3>Why Choose Us</h3>
            </div>
            <div className="post-choose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate.
              </p>
            </div>
          </div>
          </div>
      </div>
      <Curve  classname="color2 invert  hr-curve" />
        {/* <Curve  classname="color2  hr-curve" /> */}
       
      <div className="section fullBox">
        <div className="wrap">
          <div className="container mainText">
            <div className="title-section">
              <h1 className="title">Why Choose Us</h1>
              <h2>Why Choose Us2</h2>
              <h3>Why Choose Us</h3>
            </div>
            <div className="post-choose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate.
              </p>
            </div>
          </div>
          </div>
      </div>
   
    </LayoutIndex>
  )
}

export default IndexPage
