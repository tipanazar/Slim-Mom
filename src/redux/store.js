import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import userReducer from "./userAccount/userAccount-slice";
import productsReducer from "./products/products-slice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const productsPersistConfig = {
  key: "products",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedProductsReducer = persistReducer(
  productsPersistConfig,
  productsReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedUserReducer,
    products: persistedProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
