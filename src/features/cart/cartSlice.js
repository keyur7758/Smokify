import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            let itemExist = state.find((item)=>item.id === action.payload.id)
            if(itemExist){
                itemExist.quantity += 1
            }else{
                state.push(action.payload)
            }
        },
        DeleteCart:(state,action)=>{
          return state.filter((item)=>item.id !== action.payload)
        },
        incCart:(state,action)=>{
            let itemExist = state.find((item)=>item.id === action.payload.id)
            if(itemExist.quantity >= 1){
                itemExist.quantity += 1
            }
        },
        decCart:(state,action)=>{
            let itemExist = state.find((item)=>item.id === action.payload.id)
            if(itemExist.quantity <= 1){
                itemExist.quantity = 1
            }else{
                itemExist.quantity -= 1
            }
        }  
    }
})

export const {addToCart, DeleteCart,incCart,decCart} = cartSlice.actions
export default cartSlice.reducer