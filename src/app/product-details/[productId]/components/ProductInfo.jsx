import React, { useContext, useEffect } from 'react'
import { faCartPlus, faComment, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkeletonProductInfo from './SkeletonProductInfo'
import Link from 'next/link'
import { faFacebook, faFacebookF, faSignalMessenger, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { CartContext } from '@/app/_context/CartContext'

function ProductInfo({ product }) {
    // const { cart, setCart } = useContext(CartContext)
    const { addToCart } = useContext(CartContext);

    // // تحميل البيانات من LocalStorage عند التهيئة
    // useEffect(() => {
    //     const savedCart = localStorage.getItem("cart");
    //     if (savedCart) {
    //         setCart(JSON.parse(savedCart));
    //     }
    // }, []);

    // // تحديث LocalStorage عند تغيير السلة
    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    // }, [cart]);

   
    // const addToCart = (product) => {
    //     setCart((prevCart) => {
    //         const isExisting = prevCart.find((item) => item.id === product.id);
    //         if (isExisting) {
    //             return prevCart.map((item) =>
    //                 item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    //             );
    //         } else {
    //             return [...prevCart, { ...product, quantity: 1 }];
    //         }
    //     });
    // };


    return (
        <div>
            {product?.id ?
                <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font tracking-widest text-primary capitalize font-medium mb-4">{product?.category}</h2>
                    <h1 className="text-gray-900 dark:text-gray-200 text-3xl title-font font-medium mb-1">{product?.title}</h1>
                    <div className="flex mb-4">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-primary" />
                            {/* <span className="text-primary font-semibold text-2xl ml-3 border-r-2 pr-3 border-gray-200">{product.rating.rate} </span> */}
                            <span className="text-primary font-semibold text-2xl ml-3 border-r-2 pr-3 border-gray-200">{product.rating} </span>
                            {/* <span className="text-gray-600 ml-3">{product.rating.count} Reviews</span> */}
                            <span className="text-gray-600 ml-3">{product.reviews.length} Reviews</span>
                        </span>

                        <span className="flex items-center ml-3 pl-3 py-2 gap-3 border-l-2 border-gray-200 space-x-2s">
                            <Link href="#" className="text-gray-500 hover:text-primary">
                                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-primary">
                                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-primary">
                                <FontAwesomeIcon icon={faComment} className="w-5 h-5" />
                            </Link>
                        </span>
                    </div>

                    <p className="leading-relaxed pb-5">{product?.description}</p>

                    {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div className="flex">
                            <span className="mr-3">Color</span>
                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>

                        <div className="flex ml-6 items-center">
                            <span className="mr-3">Size</span>
                            <div className="relative">
                                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base pl-3 pr-10">
                                    <option>SM</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div> */}

                    <div className="flex items-center border-t-2 border-gray-100 pt-5">
                        <span className="title-font font-medium text-2xl text-gray-900 dark:text-gray-300">$ {product?.price}</span>
                        <button className='flex items-center ml-auto text-white border-0 py-2 px-6 focus:outline-none bg-primary hover:bg-[#222] rounded gap-2'
                            onClick={() => addToCart(product)}>
                            <FontAwesomeIcon icon={faCartPlus} /> Add To Cart
                        </button>
                    </div>
                </div >
                :
                <SkeletonProductInfo />
            }

        </div >
    )
}

export default ProductInfo
