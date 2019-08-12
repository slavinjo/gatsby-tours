import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar style={{ background: "red" }} />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
