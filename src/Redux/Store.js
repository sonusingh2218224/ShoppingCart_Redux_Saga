// import { createStore } from "redux";
import RootReducers from "./RootReducers";
import { configureStore } from "@reduxjs/toolkit"
import ProductSaga from "./ProductSaga"
import createSagaMiddleware from "@redux-saga/core"

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
    reducer: RootReducers,
    middleware: () => [sagaMiddleWare]

})
sagaMiddleWare.run(ProductSaga)
export default store