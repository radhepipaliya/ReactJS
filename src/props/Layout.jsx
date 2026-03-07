import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <header>
            <h1>Welcome to my Website</h1>
        </header>

        <main>{children}</main>

        <footer>@2026 All Rights Reserved to Owner!</footer>
    </>
  )
}

export default Layout   