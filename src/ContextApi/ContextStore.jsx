import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const ContextStore = createContext(null);

const StoreContextProvider = (props) => {
    const [CartItems, SetCartItems] = useState({});

    console.log(food_list);

    const AddToCart = (ItemId) => {
        if (!CartItems[ItemId]) {
            SetCartItems((prev) => ({ ...prev, [ItemId]: 1 }));
        } else {
            SetCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
        }
    };

    const removeFromCart = (ItemId) => {
        SetCartItems((prev) => {
            const updatedItems = { ...prev };
            if (updatedItems[ItemId] > 1) {
                updatedItems[ItemId] -= 1;
            } else {
                delete updatedItems[ItemId];
            }
            return updatedItems;
        });
    };

    const getTotalCartQty = () => {
        let total = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                const iteminfo = food_list.find(
                    (product) => product._id === item
                );
                if (iteminfo) {
                    total += iteminfo.price * CartItems[item];
                }
            }
        }
        return total;
    };

    const contextValue = {
        food_list,
        CartItems,
        SetCartItems,
        AddToCart,
        removeFromCart,
        getTotalCartQty,
    };

    return (
        <ContextStore.Provider value={contextValue}>
            {props.children}
        </ContextStore.Provider>
    );
};

export default StoreContextProvider;