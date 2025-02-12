import { configureStore } from '@reduxjs/toolkit'
import { loginApi } from './feature/login/loginSlice'
import cartSlice from './feature/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { persistStore, persistReducer  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// ...

const persistCartConfig = {
    key: 'cart',
    storage
}

const persistedCart = persistReducer(persistCartConfig, cartSlice)

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
        cart: persistedCart
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                    'persist/PAUSE',
                    'persist/FLUSH',
                    'persist/REGISTER',
                    'persist/PURGE'
                ],
            },
        }).concat(loginApi.middleware),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
