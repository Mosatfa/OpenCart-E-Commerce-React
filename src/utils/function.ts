import { IProduct } from "../interfaces";

export const addItemToShoppingCart = (cartItem: IProduct[], product: IProduct) => {
    const exite = cartItem.find((item) => item.id === product.id)
    if (exite) {
        return cartItem.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
    }
    return [...cartItem, { ...product, qty: 1 }]
}