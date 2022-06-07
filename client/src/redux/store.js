import { configureStore } from "@redux/toolkit";
import storeSlice from "./Store/storeSlice";

export default configureStore({
    reducer: {
        store: storeSlice,
    },
});