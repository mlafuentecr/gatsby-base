import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import './styles/global.css'
import SliderIndex from '../components/SliderIndex'

const LayoutIndex = ({ children }) => {
  return (
      <div className={`pgindex wrapper`}   >
        <Header logoUrl='/logo.jpg' siteTitle='' />
        <SliderIndex />
        <main>{children}</main>
        <Footer/>
      </div>
  )
}

export default LayoutIndex
