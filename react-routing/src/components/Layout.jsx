import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <div>Aside</div>
            <div>
                <Outlet />
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout