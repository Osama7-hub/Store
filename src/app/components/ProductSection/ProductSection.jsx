"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { getProducts, getAllCategories, getProductByCategories } from "../../_utils/fetchAPI"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductList from './ProductList';

function ProductSection() {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getLatestProducts();
    }, [])

    const getLatestProducts = async () => {
        const data = await getProducts();
        setProductList(data.products);
    }

    return (
        <div className="py-16 sm:py-24">
            <h2 className="mb-10 font-bold text-4xl text-gray-900 uppercase tracking-tight">Leatest Products</h2>

            <ProductList productList={productList} />
            <div className="flex flex-wrap justify-center items-center py-[52px]">
                <Link href='/Shop' className='z-50 flex items-center bg-primary hover:bg-[#222] px-5 py-2 rounded-md font-normal text-lg text-white transition cursor-pointer group'>
                    <span>View All Collection</span> <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-[15px] text-[15px] transition group-hover:translate-x-2" />
                </Link>
            </div>
        </div>
    )
}

export default ProductSection
