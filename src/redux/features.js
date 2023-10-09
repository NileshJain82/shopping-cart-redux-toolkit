import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    noOfItems: 0,
    cartArray: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = {
                price: action.payload.price,
                title: action.payload.title,
                id: action.payload.id,
                thumbnail: action.payload.thumbnail,
                description: action.payload.description,
            };
            
            // Update state properties directly for immutability.
            return{
                value:state.value+action.payload.price,
                noOfItems:state.noOfItems+1,
                cartArray : [...state.cartArray, newItem]
            }
           
        },
        removeFromCart: (state, action) => {
           
            return {
                value : state.value-action.payload.price,
                noOfItems: state.noOfItems-1,
                cartArray : state.cartArray.filter((item) => item.id !== action.payload.id)
            }
           
            }
        },
    },
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;