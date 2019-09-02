import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Cart from "../components/Cart/cart"
import SEO from "../components/SEO"

const cart = ({ data }) => {
  return (
    <Layout>
      <SEO title="Cart" />
      <Cart />
    </Layout>
  )
}

export default cart
