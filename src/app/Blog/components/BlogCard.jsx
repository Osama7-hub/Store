"use client";
import React from 'react'
// import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function BlogCard({ src, subject, content, day, date }) {
    return (
        <div className="shadow-none my-8 rounded-none overflow-hidden card">
            <div
                color="transparent"
                className="relative m-0 my-10 rounded-none card-header"
            >
                <div className='overflow-hidden'>
                    <Image src={src} alt="blog-image" className='hover:scale-110 w-full h-full transition-all duration-[0.8s]' width={800} height={800} />
                </div>
                <div className='top-[15px] left-[10px] absolute flex flex-col justify-center items-center gap-1 bg-[#ffffff7a] w-[70px] min-h-[70px] date'>
                    <span className='text-[#333] text-[30px] text-center leading-4'>{day}</span>
                    <span className='text-[#666] text-[12px] text-center leading-7'>{date}</span>
                </div>
            </div>
            <div className="px-1 card-body">
                <a href='#' className='font-semibold text-[#333] text-[26px] hover:text-primary leading-5 transition-all duration-300'>{subject}</a>
                <p variant="lead" color="gray" className="my-3 font-normal text-[#555] text-[16px]">{content}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-2 px-1 card-footer">
                <div className="flex items-center space-x-2 text-[#555] text-[14px]">
                    <span>BY: Admin </span>
                    <span>|</span>
                    <span>StreetStyle, Fashion, Couple</span>
                    <span>|</span>
                    <span>8 Comments</span>
                </div>
                <Link href='#' className='flex items-center gap-2 text-[14px] hover:text-primary uppercase transition-all duration-300'>Continue Reading <FontAwesomeIcon icon={faArrowRight} className='w-[15px] text-[15px]' /></Link>
            </div>
        </div>
    )
}

export default BlogCard