"use client"
import React, { useEffect, useState } from 'react'
import { CartContext } from "../app/_context/CartContext";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); // حالة لتحميل البيانات

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart); // تحميل البيانات بنجاح
                }
            } catch (error) {
                console.error('Error parsing cart data:', error);
                localStorage.removeItem('cart'); // تنظيف البيانات غير الصحيحة
            }
        }
        setIsLoaded(true); // تأكيد أن البيانات تم تحميلها
    }, []);

    // تحديث LocalStorage عند تغيير السلة
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (product) => {
        console.log("Adding to cart:", product);
        setCart(oldCart => [...oldCart, product])
    }

    // إزالة منتج من السلة
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // حساب مجموع السعر
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}