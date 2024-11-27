'use client'
import { useContext, useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '@/app/_context/CartContext'

// const products = [
//     {
//         id: 1,
//         name: 'Throwback Hip Bag',
//         href: '#',
//         color: 'Salmon',
//         price: '$90.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//         imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//     },
//     {
//         id: 2,
//         name: 'Medium Stuff Satchel',
//         href: '#',
//         color: 'Blue',
//         price: '$32.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//         imageAlt:
//             'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//     },
//     {
//         id: 3,
//         name: 'Zip Tote Basket',
//         href: '#',
//         color: 'White and black',
//         price: '$140.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
//         imageAlt:
//             'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//     },
//     // {
//     //     id: 4,
//     //     name: 'Medium Stuff Satchel',
//     //     href: '#',
//     //     color: 'Blue',
//     //     price: '$32.00',
//     //     quantity: 1,
//     //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     //     imageAlt:
//     //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//     // },
//     // {
//     //     id: 5,
//     //     name: 'Medium Stuff Satchel',
//     //     href: '#',
//     //     color: 'Blue',
//     //     price: '$32.00',
//     //     quantity: 1,
//     //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     //     imageAlt:
//     //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//     // },
//     // {
//     //     id: 6,
//     //     name: 'Medium Stuff Satchel',
//     //     href: '#',
//     //     color: 'Blue',
//     //     price: '$32.00',
//     //     quantity: 1,
//     //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     //     imageAlt:
//     //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//     // },
//     // {
//     //     id: 7,
//     //     name: 'Medium Stuff Satchel',
//     //     href: '#',
//     //     color: 'Blue',
//     //     price: '$32.00',
//     //     quantity: 1,
//     //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     //     imageAlt:
//     //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//     // },
//     // More products...
// ]

export default function Cart({ openCart, setOpenCart }) {
    // const [open, setOpen] = useState(true)
    // const { cart, setCart } = useContext(CartContext)
    const { cart, removeFromCart, totalPrice } = useContext(CartContext);

    return (
        <Dialog open={openCart} onClose={setOpenCart} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 data-[closed]:opacity-0 transition-opacity duration-500 ease-in-out"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="right-0 fixed inset-y-0 flex pl-10 max-w-full pointer-events-none">
                        <DialogPanel
                            transition
                            className="w-screen max-w-md transform transition data-[closed]:translate-x-full duration-500 sm:duration-700 pointer-events-auto ease-in-out"
                        >
                            <div className="flex flex-col bg-white shadow-xl h-full overflow-y-scroll">
                                <div className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
                                    <div className="flex justify-between items-start pb-5">
                                        <DialogTitle className="font-medium text-gray-900 text-lg">Shopping cart</DialogTitle>
                                        <div className="flex items-center ml-3 h-7">
                                            <button
                                                type="button"
                                                onClick={() => setOpenCart(false)}
                                                className="relative -m-2 p-2 text-gray-400 hover:text-primary"
                                            >
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Close panel</span>
                                                <FontAwesomeIcon icon={faX} aria-hidden="true" className="size-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-12">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {
                                                    cart.length === 0 ? (
                                                        <p>The Cart Is Empty</p>
                                                    ) :
                                                        cart.map((product) => (
                                                            <li key={product.id} className="flex py-6">
                                                                <div className="border-gray-200 border rounded-md overflow-hidden shrink-0 size-24">
                                                                    <Image src={product.thumbnail} alt={product.title} className="object-cover size-full" width={400} height={400} />
                                                                </div>

                                                                <div className="flex flex-col flex-1 ml-4">
                                                                    <div>
                                                                        <div className="flex justify-between font-medium text-base text-gray-900">
                                                                            <h3><Link href={`/product-details/${product.id}`} className='hover:text-primary'>{product.title}</Link></h3>
                                                                            <p className="ml-4">{product.price}</p>
                                                                        </div>
                                                                        {/* <p className="text-gray-400">{product.category}</p> */}
                                                                        <p className="mt-1 text-gray-500 text-sm">{product.category}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 justify-end items-end text-sm">
                                                                        {/* <p className="text-gray-500">Qty {product.quantity}</p> */}
                                                                        {/* <button onClick={() => decrementQuantity(item.id)}>-</button> */}

                                                                        <div className="flex">
                                                                            <button type="button" className="font-medium text-primary hover:text-red-600" onClick={() => removeFromCart(product.id)} disabled={cart.length === 0}>
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-gray-200 px-4 sm:px-6 py-6 border-t">
                                    <div className="flex justify-between font-medium text-base text-gray-900">
                                        <p>Subtotal</p>
                                        {/* <p>$262.00</p> */}
                                        <p>{totalPrice.toFixed(2)} $</p>
                                    </div>
                                    <p className="mt-0.5 text-gray-500 text-sm">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="flex justify-center items-center bg-primary hover:bg-[#222] shadow-sm px-6 py-3 border border-transparent rounded-md font-medium text-base text-white transition"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    <div className="flex justify-center mt-6 text-center text-gray-500 text-sm">
                                        <p>
                                            <span>or</span>
                                            <button
                                                type="button"
                                                onClick={() => setOpenCart(false)}
                                                className="mx-2 font-medium hover:font-semibold text-primary transition"
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
