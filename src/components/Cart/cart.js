import React from "react"
import { connect } from "react-redux"
import { toggleDarkMode } from "../../state/app"

const cart = ({ isDarkMode, dispatch }) => {
  return (
    <div>
      <div>Hello from cart</div>
      <button
        style={isDarkMode ? { background: "black", color: "white" } : null}
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
      >
        Dark mode {isDarkMode ? "on" : "off"}
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.app.isDarkMode,
})

export default connect(
  mapStateToProps,
  null
)(cart)
