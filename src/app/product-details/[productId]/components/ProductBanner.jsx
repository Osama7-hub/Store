"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import SkeletonProductBanner from './SkeletonProductBanner';

function ProductBanner({ product }) {
    const [selectedImg, setselectedImg] = useState(0);
    return (
        <div>
            {
                // product?.image ?
                product?.thumbnail ?
                    <div className="gap-4 grid">
                        <div className='w-[60%]'>
                            <Image
                                // src={product?.image}
                                src={product?.images[[selectedImg]]}
                                alt='product-details-banner'
                                width={400}
                                height={400}
                                className='border-gray-100 border rounded w-full h-64 lg:h-full lg:max-h-[500px] object-center object-cover'
                            />
                        </div>
                        <div className="gap-2 grid grid-cols-4">
                            {product?.images.map((item, index) => {
                                return (
                                    <Image
                                        onClick={() => { setselectedImg(index) }}
                                        key={index} value={index}
                                        src={item}
                                        alt='product-details-banner'
                                        width={400}
                                        height={400}
                                        className={`h-[80px] lg:h-[100px] object-cover object-center rounded cursor-pointer border border-gray-200 ${selectedImg === index ? 'border-primary border-2' : ''}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    : <SkeletonProductBanner />
            }
        </div>
    )
}

export default ProductBanner