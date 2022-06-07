import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
    name: "MoSweets",
    initialState: {
        products: [],
        cart: [],
        categories: [],
        currentCategory: "",
        currentPage: "",
        user: {
            isAdmin: false,
        },
        wishlist: [],
        modal: false,
    },
    reducers: {
        updateUser: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload,
            };
        },
        updateProduct: (state, action) => {
            state.products = action.payload;
        },
        updateCategory: (state, action) => {
            state.categories = action.payload;
        },
        updateCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
        updateCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        updateCart: (state, action) => {
            state.cart = action.payload;
        },
        addMultipleToCart: (state, action) => {
            state.cart.push(...action.payload);
        },
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        }
    }
})