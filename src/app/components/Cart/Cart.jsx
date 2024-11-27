'use client'
import { useContext, useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '@/app/_context/CartContext'

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 3,
        name: 'Zip Tote Basket',
        href: '#',
        color: 'White and black',
        price: '$140.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // {
    //     id: 4,
    //     name: 'Medium Stuff Satchel',
    //     href: '#',
    //     color: 'Blue',
    //     price: '$32.00',
    //     quantity: 1,
    //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    //     imageAlt:
    //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    // },
    // {
    //     id: 5,
    //     name: 'Medium Stuff Satchel',
    //     href: '#',
    //     color: 'Blue',
    //     price: '$32.00',
    //     quantity: 1,
    //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    //     imageAlt:
    //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    // },
    // {
    //     id: 6,
    //     name: 'Medium Stuff Satchel',
    //     href: '#',
    //     color: 'Blue',
    //     price: '$32.00',
    //     quantity: 1,
    //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    //     imageAlt:
    //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    // },
    // {
    //     id: 7,
    //     name: 'Medium Stuff Satchel',
    //     href: '#',
    //     color: 'Blue',
    //     price: '$32.00',
    //     quantity: 1,
    //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    //     imageAlt:
    //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    // },
    // More products...
]

export default function Cart({ openCart, setOpenCart }) {
    // const [open, setOpen] = useState(true)
    // const { cart, setCart } = useContext(CartContext)
    const { cart, removeFromCart, totalPrice } = useContext(CartContext);

    return (
        <Dialog open={openCart} onClose={setOpenCart} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between pb-5">
                                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
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
                                                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <Image src={product.thumbnail} alt={product.title} className="size-full object-cover" width={400} height={400} />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3><Link href={`/product-details/${product.id}`} className='hover:text-primary'>{product.title}</Link></h3>
                                                                            <p className="ml-4">{product.price}</p>
                                                                        </div>
                                                                        {/* <p className="text-gray-400">{product.category}</p> */}
                                                                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-end text-sm">
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

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        {/* <p>$262.00</p> */}
                                        <p>{totalPrice.toFixed(2)} $</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#222] transition"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            <span>or</span>
                                            <button
                                                type="button"
                                                onClick={() => setOpenCart(false)}
                                                className="font-medium text-primary transition hover:font-semibold mx-2"
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
