import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import "./category.css"
import {cats} from "./data"

function Category() {
    return (
        <section className='mx-auto mt-14 mb-20 container'>
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:mt-8 mg-6">
                {
                    cats.map((item) => {
                        return (
                            <div className="block relative border-[#e6e6e6] border-[1px]" key={item.link}>
                                <Image
                                    src={item.link}
                                    className="border-none w-full align-middle"
                                    alt="categories banner"
                                    width={500}
                                    height={500}
                                />

                                <Link href="/Shop" className="block-text top-0 left-0 absolute flex flex-col justify-between items-start bg-[#6775d600] hover:bg-primary hover:opacity-75 px-[38px] py-[34px] w-full h-full touch-manipulation transition-all duration-[0.3s]">
                                    <div className="flex flex-col items-start self-start">
                                        <span className="pb-2 font-semibold text-[#333] text-[28px] leading-[1.1] transition-all duration-[0.4s] cat-name">{item.category}</span>
                                        <span className="text-[#555] text-[14px] transition-all duration-[0.4s] cat-info">{item.text}</span>
                                    </div>

                                    <div className="btn-shop-now pb-1 border-b-2 transition-all duration-[0.5s] overflow-hidden scale-x-0">
                                        <div className="block-link text-[15px] text-white uppercase leading-[1.466667] transition-all translate-y-[250%] duration-[0.9s]">Shop Now</div>
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
