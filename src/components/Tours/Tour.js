import React, { Component } from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { connect } from "react-redux"
import { addToCart } from "../../state/cart"

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ tour, cart, dispatch, addTo }) => {
  //const { tour , cart, dispatch} = this.props;
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, price, country, days, slug, images } = tour

  // let mainImage
  // if (images) {
  //   mainImage = images[0].fluid
  // } else {
  //   mainImage = img
  // }
  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />

        <div className={styles.button_row}>
          <AniLink fade className={styles.link} to={`/tours/${slug}`}>
            details
          </AniLink>

          {/*<button className={styles.link} onClick={() => dispatch(addToCart(tour))}>*/}
          <AniLink className={styles.link} to="/tours" onClick={() => {addTo(tour)}}>
            add to cart
          </AniLink>
        </div>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || "default country"}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  addTo: item => dispatch(addToCart(item)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tour)
