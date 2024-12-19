import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
        <NavigationBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout