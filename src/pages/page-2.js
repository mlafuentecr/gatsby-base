import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layoutinternal"


const SecondPage = () => (
  <Layout>
      <div className="section color1">
        <div className="wrap">
          <div className="container mainText">
            <div className="title-section">
              <h1 className="title full">Page 2</h1>
              <h2>Page 2</h2>
            </div>
            <div className="post-choose">
            <h3>Why Choose Us</h3>
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
  </Layout>
)

export default SecondPage