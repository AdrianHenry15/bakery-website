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
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (product) => product._id !== action.payload._id
            );
        },
        updateWishlist: (state, action) => {
            state.wishlist = action.payload;
        },
        deleteFromCart: (state, action) => {
            let newState = state.cart.filter((product) => {
                return product._id.toString() !== action.payload.toString();
            });
            state.cart = newState;
        },
        clearCart: (state, action) => {
            state.cartOpen = false;
            state.cart = [];
        },
        toggle_Cart: (state, action) => {
            state.cartOpen = !state.cartOpen;
        },
        toggle_Modal: (state, action) => {
            state.modal = !state.modal;
        },
        updateFile: (state, action) => {
            state.file = action.payload;
        },
    },
});

export const {
    updateProduct,
    updateCategory,
    updateCurrentCategory,
    updateCurrentPage,
    addToCart,
    updateCart,
    addMultipleToCart,
    addToWishlist,
    removeFromWishlist,
    updateWishlist,
    deleteFromCart,
    clearCart,
    toggle_Cart,
    toggle_Modal,
    updateFile,
    updateUser,
} = storeSlice.actions;

export default storeSlice.reducer;