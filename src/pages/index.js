import React, { Children } from "react"
import LayoutIndex from "../components/layoutIndex"

const IndexPage = props => {
  return (
    <LayoutIndex>
      <div className="container mainText">
        <div className="title-section">
          <h4 className="title">Why Choose Us</h4>
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
    </LayoutIndex>
  )
}

export default IndexPage
