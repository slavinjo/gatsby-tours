import React from "react"
import { connect } from "react-redux"
import { toggleDarkMode } from "../../state/app"
import Card from '../Cart/NewCart/Card'

{/*
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
*/}

const showItems = items => {
  return (
      <div style={{ marginTop: "10rem" }}>
          <h2>Your cart has {`${items.length}`} items</h2>
          <hr />
          {items.map((product, i) => (
              <Card
                  key={i}
                  product={product}
                  showAddToCartButton={false}
                  cartUpdate={true}
                  showRemoveProductButton={true}
              />
          ))}
      </div>
  );
};

const cart = ({ items, isDark, dispatch }) => {
  return (
    <div>
      {items && showItems(items)}
    </div>
  )
}

const mapStateToProps = state => ({
  //isDark: state.app.isDarkMode,
  items: state.cart.cart,
})

export default connect(
  mapStateToProps,
  null
)(cart)
