import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './productList.css';

// import required modules
import { Navigation } from 'swiper/modules';

function ProductList({ productList }) {
  {
    return (
      // Swiper
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        navigation={true} 
        className="mySwiper productList-swiper"
      >
        {
          productList.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative group">
                <div className='overflow-hidden'>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    className="group-hover:scale-110 bg-gray-200 rounded-md w-full lg:h-80 transition duration-[0.5s] aspect-square object-cover lg:aspect-auto"
                    width={500}
                    height={500}
                    priority={true}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="w-fit text-gray-700 text-sm">
                      <Link href={`/product-details/${product.id}`} className="font-semibold text-primary">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 ml-0 w-fit text-gray-500 text-sm">{product.category}</p>
                  </div>
                  <p className="font-medium text-gray-900 text-sm">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper >
    )
  }
}

export default ProductList



