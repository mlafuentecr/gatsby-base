import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import css from './styles/global'
import SliderIndex from '../components/SliderIndex'

const LayoutIndex = props => {
  

  return (
      <div className={`pgindex wrapper`}   >
        <Header/>
        <SliderIndex />
        <Footer/>
      </div>
  )
}

export default LayoutIndex
