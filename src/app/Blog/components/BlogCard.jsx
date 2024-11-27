"use client";
import React from 'react'
// import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function BlogCard({ src, subject, content, day, date }) {
    return (
        <div className="card overflow-hidden rounded-none my-8 shadow-none">
            <div
                color="transparent"
                className="card-header m-0 rounded-none relative my-10"
            >
                <div className='overflow-hidden'>
                    <Image src={"/" + src} alt="blog-image" className='hover:scale-110 transition-all duration-[0.8s] w-full h-full' width={800} height={800} />
                </div>
                <div className='date flex flex-col items-center justify-center gap-1 bg-[#ffffff7a] absolute top-[15px] left-[10px] w-[70px] min-h-[70px]'>
                    <span className='text-[30px] leading-4 text-center text-[#333]'>{day}</span>
                    <span className='text-[12px] leading-7 text-center text-[#666]'>{date}</span>
                </div>
            </div>
            <div className="card-body px-1">
                <a href='#' className='hover:text-primary transition-all duration-300 text-[26px] leading-5 font-semibold text-[#333]'>{subject}</a>
                <p variant="lead" color="gray" className="my-3 font-normal text-[16px] text-[#555]">{content}</p>
            </div>
            <div className="card-footer flex items-center justify-between px-1">
                <div className="flex items-center space-x-2 text-[14px] text-[#555]">
                    <span className=''>BY: Admin </span>
                    <span>|</span>
                    <span>StreetStyle, Fashion, Couple</span>
                    <span>|</span>
                    <span>8 Comments</span>
                </div>
                <Link href='#' className='hover:text-primary transition-all duration-300 flex gap-2 items-center uppercase text-[14px]'>Continue Reading <FontAwesomeIcon icon={faArrowRight} className='text-[15px] w-[15px]' /></Link>
            </div>
        </div>
    )
}

export default BlogCard