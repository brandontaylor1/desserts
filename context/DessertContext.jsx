import React, { useEffect, useState }from 'react'
import { createContext } from 'react';
import data from '../data.json'


export const DessertContext = createContext();

export const DessertProvider = ({children}) => {
    const [ desserts, setDesserts ] = useState(data)
    const [ total, setTotal ] = useState(0)
    const [ cartCount, setCartCount ] = useState(0)
    const [ modal, setModal ] = useState(false) 
    const [ cartItems, setCartItems ] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        try {
            return storedCart ? JSON.parse(storedCart) : []

        } catch(error) {
            console.error('Error loading cart items from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.removeItem('cartItems'); 
        setCartItems([])
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])

 
    const addToCart = (item) => {
        setCartItems((prevItems) => {
          const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
          if (existingItem) {
            return prevItems.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
          } else {
            return [...prevItems, { ...item, quantity: 1 }];
          }
        });
      };

      const incrementQuantity = (itemId) => {
        setCartItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.id === itemId
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      };

    const decrementQuantity = (itemId) => {
        setCartItems((prevItems) =>
            prevItems
                .map((cartItem) =>
                    cartItem.id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter((cartItem) => cartItem.quantity > 0) // Remove items with quantity 0
        );
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <DessertContext.Provider value={{
            desserts,
            setDesserts, 
            cartCount, 
            setCartCount, 
            cartItems, 
            setCartItems,
            incrementQuantity,
            decrementQuantity,
            addToCart,
            removeFromCart,
            clearCart,
            total, 
            setTotal,
            modal, 
            setModal

            
            }}>
            {children}
        </DessertContext.Provider>
    )
}
