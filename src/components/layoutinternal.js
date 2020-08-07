import React, { useEffect, useState } from 'react'

import Header from './header'
import Footer from './footer'


  export default function LayoutIndex({ children }) {
    return (
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
    )
  }


