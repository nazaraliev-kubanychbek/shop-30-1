import { createReducer, createAction } from '@reduxjs/toolkit';
import axios from 'axios';



const GET_CATEGORIES = 'GET_CATEGORIES';
const ADD_CART = 'ADD_CART';
const DECREMENT_CART = 'DECREMENT_CART';
const DELETE_CART = 'DELETE_CART';

export const getCategories = () =>{
    let action = createAction(GET_CATEGORIES);
    return (dispatch) =>{
            axios('https://fakestoreapi.com/products/categories')
            .then(({data}) => dispatch(action(data)))
    }
}

export const addCart = createAction(ADD_CART);
export const decrementCart = createAction(DECREMENT_CART);
export const deleteCart = createAction(DELETE_CART);

const initialState = {
    categories: [],
    cartData: [],
};


export default createReducer(initialState, (build) => {
    build
        .addCase(GET_CATEGORIES, (state, action) => {
            state.categories = action.payload
        })
        .addCase(ADD_CART, (state, action)=>{
            const idx = state.cartData.findIndex(item => item.id === action.payload.id);
            if(idx > -1){
                state.cartData[idx].count++
            } else{
                state.cartData = [
                    {
                        ...action.payload,
                        count: 1,
                    },
                    ...state.cartData
                ]
            }
        })
        .addCase(DECREMENT_CART, (state,action) =>{
            const idx = state.cartData.findIndex(item => item.id === action.payload.id);
            if(state.cartData[idx].count > 1){
                state.cartData[idx].count--
            }
        })
        .addCase(DELETE_CART, (state, action)=>{
           state.cartData = state.cartData.filter(item => item.id !== action.payload.id);
        })
     
});