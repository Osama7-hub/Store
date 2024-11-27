"use client"
import React from 'react'
// Core modules imports are same as usual
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

import Link from 'next/link';
import Image from 'next/image';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {mySlider} from "./data"

function Hero() {
    return (
        <div>
            <Swiper
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {mySlider.map((item) => {
                    return (
                        <SwiperSlide key={item.link} className="parent-slider relative hero-swiper">
                            <Image src={"/" + item.link} width={10000} height={1000} alt="Swapper-Image" className="w-full h-full md:mt-0 lg:!object-top md:!object-cover" priority={true} />
                            <div className="h-1/2 absolute top-1/4 2xl:left-[19%] xl:left-[10%] sm:left-[2%] bg-transparent border-none shadow-none text-left">
                                <div className='container mx-auto CardBody leading-9'>
                                    <h5 className="mb-2 text-[#222] uppercase md:text-5xl sm:text-2xl font-normal">Lifestyle Collection</h5>
                                    <h2 className="mb-2 text-primary font-bold uppercase">{item.text}</h2>
                                    <div className='flex gap-4'>
                                        <h4 className='mb-2 text-[#222] md:text-4xl sm:text-2xl uppercase'>Sale Up To</h4>
                                        <h4 className="mb-2 text-primary md:text-4xl sm:text-2xl uppercase">30% Off</h4>
                                    </div>
                                    <h5 className="mb-2 text-[#222] uppercase text-md font-normal">Get Free Shipping on orders over $99.00</h5>
                                </div>
                                <div className="CardFooter pt-0">
                                    <Link href="/Shop" className="inline-block">
                                        <button className="flex items-center gap-2 mt-5 uppercase bg-primary rounded-[6px] p-2 px-5 hover:bg-black transition text-white">
                                            Shop Now
                                            <FontAwesomeIcon icon={faArrowRight} className='text-[15px] w-[15px]' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

export default Hero
