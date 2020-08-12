import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import './styles/global.css'
import SliderIndex from '../components/SliderIndex'

import handleChick from './handleClick'

const LayoutIndex = ({ children }) => {
  return (
      <div className={`pgindex wrapper`}    onClick={handleChick}>
        <Header logoUrl='/logo.jpg' siteTitle='' />
        <SliderIndex />
        <main>{children}</main>
        <Footer/>
      </div>
  )
}

export default LayoutIndex
