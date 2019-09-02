import React from "react"
import { connect } from "react-redux"
import { toggleDarkMode } from "../../state/app"

const cart = ({ items, isDark, dispatch }) => {
  return (
    <div>
      <div>Hello from cart</div>
      <button
        style={isDark ? { background: "black", color: "white" } : null}
        onClick={() => dispatch(toggleDarkMode(!isDark))}
      >
        Dark mode {isDark ? "on" : "off"}
      </button>
      {items && items.map((d, i) => <li key={d.contentful_id}>{d.name}</li>)}
    </div>
  )
}

const mapStateToProps = state => ({
  isDark: state.app.isDarkMode,
  items: state.cart.cart,
})

export default connect(
  mapStateToProps,
  null
)(cart)
