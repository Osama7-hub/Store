"use client";
import React from 'react'
import BlogCard from './components/BlogCard'
import Image from 'next/image';
import HeroPages from '../components/HeroPages/HeroPages';
import Link from 'next/link';
import { featuredProducts, archives, tags } from "./data"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Blog() {
    return (
        <div>
            <HeroPages title={"Blog"} />
            <div className="mx-auto mb-20 px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-7xl container">
                <div className="gap-4 lg:gap-8 grid grid-cols-1 xl:grid-cols-3 mt-10">
                    <div className="lg:col-span-2 sm:pr-0 lg:pr-28">
                        <BlogCard
                            src={"./images/blog-01.webp"}
                            subject={"8 Inspiring Ways to Wear Dresses in the Winter"}
                            content={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"}
                            day={22}
                            date={"Jan 2018"}
                        />
                        <BlogCard
                            src={"./images/blog-02.webp"}
                            subject={"The Great Big List of Men’s Gifts for the Holidays"}
                            content={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"}
                            day={18}
                            date={"Jan 2018"}
                        />
                        <BlogCard
                            src={"./images/blog-03.webp"}
                            subject={"5 Winter-to-Spring Fashion Trends to Try Now"}
                            content={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"}
                            day={16}
                            date={"Jan 2018"}
                        />
                    </div>

                    <div className="my-24">
                        <div className="relative search">
                            <input id="search" placeholder='Search ...' name="search" type="search" autocomplete="off" required
                                className="block border-0 px-6 py-4 rounded-full ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm/6" />
                <FontAwesomeIcon icon={faSearch} className='top-[50%] right-[5%] absolute w-[15px] text-[15px] text-gray-400 translate-y-[-50%]' />
                        </div>

                        <div className="my-11 featured-products">
                            <h2 className='font-semibold text-2xl uppercase'>Featured Products</h2>
                            <div className="shadow-none my-10">
                                <ul>
                                    {
                                        featuredProducts.map(featProduct => {
                                            return (
                                                <li className='flex items-start gap-7 my-5' key={featProduct.id}>
                                                    <div>
                                                        <Image src={"/" + featProduct.src} alt="PRODUCT" className="w-full h-full" width={300} height={300} />
                                                    </div>
                                                    <div className='flex flex-col gap-3 p-2'>
                                                        <h6 className='font-medium text-[#333] hover:text-primary transition cursor-pointer'>{featProduct.title}</h6>
                                                        <p className="font-normal text-[#777]">{featProduct.price}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 archive">
                            <h2 className='font-semibold text-2xl uppercase'>Archive</h2>
                            <div className="shadow-none my-5">
                                <ul className='leading-5'>
                                    {
                                        archives.map(archive => {
                                            return (
                                                <Link href="#">
                                                    <li key={archive.id} className='flex justify-between items-center py-3 border-b-[1px] hover:text-primary'>
                                                        <div>{archive.date}</div>
                                                        <div><span className="rounded-full text-primary">({archive.number})</span></div>
                                                    </li>
                                                </Link>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="tags">
                            <h2 className='my-10 font-semibold text-2xl'>Tags</h2>
                            <div className='flex flex-wrap items-center gap-3'>
                                {
                                    tags.map(tag => {
                                        return (
                                            <button key={tag.id} className='border-[#ccc] border-[1px] hover:border-primary px-5 py-1 rounded-[15px] w-fit text-[#555] text-[14px] hover:text-primary uppercase transition'>{tag.name}</button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog