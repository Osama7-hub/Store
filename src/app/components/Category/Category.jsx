import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import "./category.css"
import {cats} from "./data"

function Category() {
    return (
        <section className='container mx-auto mt-14 mb-20'>
            <div className="mg-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    cats.map((item) => {
                        return (
                            <div className="relative border-[1px] border-[#e6e6e6] block" key={item.link}>
                                <Image
                                    src={"/" + item.link}
                                    className="w-full align-middle border-none"
                                    alt="categories banner"
                                    width={500}
                                    height={500}
                                />

                                <Link href="/Shop" className="block-text bg-[#6775d600] hover:bg-primary hover:opacity-75 absolute top-0 left-0 w-full h-full touch-manipulation flex justify-between items-start flex-col px-[38px] py-[34px] transition-all duration-[0.3s]">
                                    <div className="flex flex-col items-start self-start">
                                        <span className="cat-name font-semibold text-[#333] text-[28px] leading-[1.1] transition-all duration-[0.4s] pb-2">{item.category}</span>
                                        <span className="cat-info text-[#555] text-[14px] transition-all duration-[0.4s]">Spring 2018</span>
                                    </div>

                                    <div className="btn-shop-now border-b-2 overflow-hidden scale-x-0 pb-1 transition-all duration-[0.5s]">
                                        <div className="block-link text-white translate-y-[250%] text-[15px] uppercase leading-[1.466667] transition-all duration-[0.9s]">Shop Now</div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </section >
    )
}

export default Category
