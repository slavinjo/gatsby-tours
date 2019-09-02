const initialState = {
    cart: [],
  }
  
  const ADD_TO_CART = "ADD_TO_CART"
  
  export const addToCart = cartItem => ({
    type: ADD_TO_CART,
    payload: cartItem,
  })
  
  export default (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
      case ADD_TO_CART:
        return {   
            ...state,
            cart: [...state.cart, action.payload] 
        }
      default:
        return state
    }
  }
  