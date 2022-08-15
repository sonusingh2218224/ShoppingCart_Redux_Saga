import { PRODUCT_LIST } from "./constant"

export const ProductList = () => {
    let data = "hello"
    console.warn("action", data)
    return {
        type: PRODUCT_LIST,
        data: data

    }
}

