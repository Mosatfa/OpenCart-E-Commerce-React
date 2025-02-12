import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../../interfaces'
import { addItemToShoppingCart } from '../../../utils/function'
import { RootState } from '../../store'
export interface CartState {
    cartItem: IProduct[]
}

const initialState: CartState = {
    cartItem: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { //Action
        addItemToCard(state, action: PayloadAction<IProduct>) {
            state.cartItem = addItemToShoppingCart(state.cartItem, action.payload)
        },
        removeItemFromCart: (state, action: PayloadAction<IProduct>) => {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.cartItem = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItemToCard, removeItemFromCart ,clearCart } = cartSlice.actions
export const cartSelector = ({ cart }: RootState) => cart;


export default cartSlice.reducer