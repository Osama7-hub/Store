import React, { useContext, useEffect } from 'react'
import { faCartPlus, faComment, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkeletonProductInfo from './SkeletonProductInfo'
import Link from 'next/link'
import { faFacebook, faFacebookF, faSignalMessenger, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { CartContext } from '@/app/_context/CartContext'

function ProductInfo({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            {product?.id ?
                <div className="mt-6 lg:mt-0 lg:py-6 lg:pl-10 w-full">
                    <h2 className="mb-4 font-medium text-primary text-sm capitalize tracking-widest title-font">{product?.category}</h2>
                    <h1 className="mb-1 font-medium text-3xl text-gray-900 dark:text-gray-200 title-font">{product?.title}</h1>
                    <div className="flex mb-4">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-primary" />
                            <span className="border-gray-200 ml-3 pr-3 border-r-2 font-semibold text-2xl text-primary">{product.rating} </span>
                            <span className="ml-3 text-gray-600">{product.reviews.length} Reviews</span>
                        </span>

                        <span className="flex items-center gap-3 space-x-2s border-gray-200 ml-3 py-2 pl-3 border-l-2">
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
                    <p className="pb-5 leading-relaxed">{product?.description}</p>
                    <div className="flex items-center border-gray-100 pt-5 border-t-2">
                        <span className="font-medium text-2xl text-gray-900 dark:text-gray-300 title-font">$ {product?.price}</span>
                        <button className='flex items-center gap-2 border-0 bg-primary hover:bg-[#222] ml-auto px-6 py-2 rounded text-white focus:outline-none'
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
