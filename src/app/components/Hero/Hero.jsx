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
                        <SwiperSlide key={item.link} className="relative hero-swiper parent-slider">
                            <Image src={item.link} width={10000} height={1000} alt="Swapper-Image" className="lg:!object-top md:mt-0 w-full h-full md:!object-cover" priority={true} />
                            <div className="top-1/4 sm:left-[2%] 2xl:left-[19%] xl:left-[10%] absolute bg-transparent shadow-none border-none h-1/2 text-left">
                                <div className='mx-auto leading-9 CardBody container'>
                                    <h5 className="mb-2 font-normal text-[#222] sm:text-2xl md:text-5xl uppercase">Lifestyle Collection</h5>
                                    <h2 className="mb-2 font-bold text-primary uppercase">{item.text}</h2>
                                    <div className='flex gap-4'>
                                        <h4 className='mb-2 text-[#222] sm:text-2xl md:text-4xl uppercase'>Sale Up To</h4>
                                        <h4 className="mb-2 text-primary sm:text-2xl md:text-4xl uppercase">30% Off</h4>
                                    </div>
                                    <h5 className="mb-2 font-normal text-[#222] text-md uppercase">Get Free Shipping on orders over $99.00</h5>
                                </div>
                                <div className="pt-0 CardFooter">
                                    <Link href="/Shop" className="inline-block">
                                        <button className="flex items-center gap-2 bg-primary hover:bg-black mt-5 px-5 p-2 rounded-[6px] text-white uppercase transition">
                                            Shop Now
                                            <FontAwesomeIcon icon={faArrowRight} className='w-[15px] text-[15px]' />
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
