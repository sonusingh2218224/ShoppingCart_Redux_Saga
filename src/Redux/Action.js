import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART } from "./constant"

export const addToCart = (data) => {
    console.warn("action", data)
    return {
        type: ADD_TO_CART,
        data: data

    }
}

export const RemoveToCart = (data) => {
    console.warn("action removetoCArt", data)
    return {
        type: REMOVE_TO_CART,
        data: data

    }
}

export const EmptyToCart = (data) => {
    console.warn("action", data)
    return {
        type: EMPTY_TO_CART,
        data: data

    }
}


