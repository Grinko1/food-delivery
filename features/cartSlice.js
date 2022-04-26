import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (existingIndex >= 0) {
        state.cartItems[existingIndex].cartQuantity += 1;
      
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      
      }

    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
      state.cartItems = nextCartItems;

     
    },
    decreaseCart(state, action) {
      const existingIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (state.cartItems[existingIndex].cartQuantity > 1) {
        state.cartItems[existingIndex].cartQuantity -= 1;
       
       
      } else if (state.cartItems[existingIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        );
        state.cartItems = nextCartItems;
  
      
      }
    },
    clearCart(state) {
        state.cartItems = []
 
      
    },
    getTotals(state) {
       let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
        const {price, cartQuantity} = cartItem
        const itemTotal = price * cartQuantity

        cartTotal.total += itemTotal 
        cartTotal.quantity += cartQuantity
        return cartTotal
      }, {

        
        total:0,
        quantity:0
      })
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    }
  },
});

export const { addToCart, removeFromCart, decreaseCart , clearCart, getTotals} = cartSlice.actions;
export default cartSlice.reducer;

