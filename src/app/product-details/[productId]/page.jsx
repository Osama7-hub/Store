"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import { getProductByCategories, getProductById } from '@/app/_utils/fetchAPI';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ProductBanner from './components/ProductBanner';
import ProductInfo from './components/ProductInfo';
import ProductList from '../../components/ProductSection/ProductList'
import SkeletonSimilarProduct from './components/SkeletonSimilarProduct';

function productDetails({ params }) {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  const getProductById_ = async () => {
    const data = await getProductById(params.productId);
    setProductDetails(data);
    getProductListByCategory(data);
  }

  const getProductListByCategory = async (product) => {
    const data = await getProductByCategories(product.category);
    setProductList(data.products);
  };

  const additionalInfo = () => {
    return (
      productDetails ?
        <div className='flex justify-center'>
          <ul className=''>
            <li className='flex flex-wrap justify-between items-start py-[7px]'>
              <span className='w-[145px] lg:w-[80px] text-[#666] text-[14] capitalize leading-[1.7]'>In Stock</span>
              <span className='w-[145px] text-[#666] text-[14] leading-[1.7]'>{productDetails.stock}</span>
            </li>
            <li className='flex flex-wrap justify-between items-start pb-[7px]'>
              <span className='w-[145px] text-[#666] text-[14] capitalize leading-[1.7]'>Availability Status</span>
              <span className='w-[145px] text-[#666] text-[14] leading-[1.7]'>{productDetails.availabilityStatus}</span>
            </li>
            <li className='flex flex-wrap justify-between items-start pb-[7px]'>
              <span className='w-[145px] text-[#666] text-[14] capitalize leading-[1.7]'>brand</span>
              <span className='w-[145px] text-[#666] text-[14] leading-[1.7]'>{productDetails.brand}</span>
            </li>
            <li className='flex flex-wrap justify-between items-start pb-[7px]'>
              <span className='w-[145px] text-[#666] text-[14] capitalize leading-[1.7]'>weight</span>
              <span className='w-[145px] text-[#666] text-[14] leading-[1.7]'>{productDetails.weight}kg</span>
            </li>
            <li className='flex flex-wrap justify-between items-start pb-[7px]'>
              <span className='w-[145px] text-[#666] text-[14] capitalize leading-[1.7]'>Return Policy</span>
              <span className='w-[145px] text-[#666] text-[14] leading-[1.7]'>{productDetails.returnPolicy}</span>
            </li>
          </ul>
        </div> : <div className='bg-slate-200 w-[200px] h-[20px] animate-pulse'></div>
    )
  }

  const tabs = [
    {
      label: "Description",
      content: productDetails.description ? productDetails.description : (
        <div className='flex flex-col gap-3'>
          <div className='bg-slate-200 w-[1000px] h-[20px] animate-pulse'></div>
          <div className='bg-slate-200 w-[1000px] h-[20px] animate-pulse'></div>
          <div className='bg-slate-200 w-[500px] h-[20px] animate-pulse'></div>
        </div>
      )
    },
    {
      label: "Additional information",
      content: additionalInfo()
    },
  ];

  return (
    <section className="text-gray-600 dark:text-gray-200 overflow-hidden body-font">
      <div className="">

        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
          <BreadCrumb path={path} />
          <div className="gap-3 sm:gap-0 grid sm:grid-cols-1 lg:grid-cols-2 mx-4 mt-10">
            <ProductBanner product={productDetails} />
            <ProductInfo product={productDetails} />
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
          <div className='my-20'>
            <div className="block">
              <div className="border-gray-200 border-b">
                <nav className="flex justify-center gap-6 -mb-px" aria-label="Tabs">
                  {
                    tabs.map((tab, index) => {
                      return (
                        <button
                          key={index}
                          className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium
                        text-gray-500 hover:border-gray-300 ${activeTab === index ? 'text-primary !border-primary font-semibold' : ''}`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tab.label}
                        </button>
                      )
                    })
                  }
                </nav>
              </div>
            </div>

            <div className='border-[1px] border-gray-200 p-10 lg:p-20 pt-[43px] min-h-52 overflow-hidden tab-content'>
              <div className='text-[#888] text-[14px] leading-[1.7]'>{tabs[activeTab].content}</div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap flex-c-m flex-w justify-center items-center bg-[#f2f2f2] mt-[73px] px-[15px] min-h-[80px]'>
          {productDetails.sku ? <span className='px-[25px] text-[#888] text-[13px] leading-[1.923]'>SKU: {productDetails.sku}</span> : <span className='bg-slate-200 w-[100px] h-[20px] animate-pulse'></span>}
          {productDetails.category ? <span className='px-[25px] text-[#888] text-[13px] capitalize leading-[1.923]'>Categories: {productDetails.category}</span> : <span className='bg-slate-200 ml-5 w-[100px] h-[20px] animate-pulse'></span>}
        </div>

        <div className='mt-28 mb-8 px-32'>
          <hr />
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
          <div className="mb-20">
            <h2 className="my-20 font-bold text-4xl text-gray-900 uppercase tracking-tight">Similar Products</h2>
            {productList.length ? <ProductList productList={productList} /> : <SkeletonSimilarProduct />}
          </div>
        </div>

      </div>
    </section>
  );
}

export default productDetails
