// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Action, combineReducers } from "@reduxjs/toolkit";
// import { api } from "./api/apiSlice";
// import authReducer from "./feature/auth/authSlice";
// import cartReducer from "./feature/cart/cartSlice";
// import categoryReducer from "./feature/category/categorySlice";
// import filterReducer from "./feature/filter/filterSlice";
// import paginatedReducer from "./feature/pagination/paginationSlice";
// import searchReducer from "./feature/search/searchSlice";
// import userReducer from "./feature/user/userSlice";
// import wishSlice from "./feature/wishes/wishSlice";
// // import { orderApiReducer } from "./feature/order/orderApi";

// export const RESET_STORE = "RESET_STORE";

// const appReducer = combineReducers({
//   paginatedProducts: paginatedReducer,
//   cart: cartReducer,
//   category: categoryReducer,
//   user: userReducer,
//   auth: authReducer,
//   search: searchReducer,
//   filter: filterReducer,
//   wishes: wishSlice,
//   [api.reducerPath]: api.reducer,
//   // ...orderApiReducer,
// });

// const rootReducer = (state: any, action: Action) => {
//   if (action.type === RESET_STORE) {
//     return {
//       // state: undefined,
//       ...state,
//       user: undefined,
//       auth: undefined,
//     };
//   }

//   return appReducer(state, action);
// };

// export default rootReducer;
