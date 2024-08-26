import { createContext, ReactNode, useReducer } from "react";
import { OrderInfo } from "../pages/Cart";
import { cartReducer, Item, Order } from "../reducers/cart/reducer";
import { addItemAction, checkoutCartAction, decrementItemQuantityAction, incrementItemQuantityAction, removeItemAction } from "../reducers/cart/actions";
import { useNavigate } from "react-router-dom";


interface CartContextType {
    cart: Item[]
    orders: Order[]
    addItem: (item: Item) => void
    removeItem: (itemId: Item['id']) => void
    decrementItemQuantity: (itemId: Item['id']) => void
    incrementItemQuantity: (itemId: Item['id']) => void
    checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            cart: [],
            orders: [],
        },
        (cartState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@coffee-delivery:cart-state-1.0.0',
            )

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }

            return cartState
        },
    )

    const navigate = useNavigate()

    const { cart, orders } = cartState

    function addItem(item: Item) {
        dispatch(addItemAction(item))
    }

    function removeItem(itemId: Item['id']) {
        dispatch(removeItemAction(itemId))
    }

    function checkout(order: OrderInfo) {
        dispatch(checkoutCartAction(order, navigate))
    }

    function incrementItemQuantity(itemId: Item['id']) {
        dispatch(incrementItemQuantityAction(itemId))
    }

    function decrementItemQuantity(itemId: Item['id']) {
        dispatch(decrementItemQuantityAction(itemId))
    }

    return (
        <CartContext.Provider
            value={{
                addItem,
                cart,
                checkout,
                decrementItemQuantity,
                incrementItemQuantity,
                orders,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    )

}

