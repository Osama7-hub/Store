"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { getAllCategories, getAllProducts, getAllProductsPerPages, getProductByCategories } from '../_utils/fetchAPI';
import ProductListShop from './ProductListShop';

function Shop() {
    const path = usePathname();
    const [productList, setProductList] = useState([]) // كل المنتجات
    const [visibleProducts, setVisibleProducts] = useState([]); // المنتجات المعروضة في الصفحة

    const [categories, setCategories] = useState([])
    const [productByCategoy, setProductByCategoy] = useState([])

    const [activeIndex, setActiveIndex] = useState(0);

    const [searchTerm, setSearchTerm] = useState(""); // لتخزين نص البحث

    const [page, setPage] = useState(0);
    // const [totalPages, setTotalPages] = useState(0); // عدد الصفحات الكلي
    const productsPerPage = 16; // عدد المنتجات في كل صفحة
    const [totalProducts, setTotalProducts] = useState(0); // إجمالي عدد المنتجات

    const totalPages = Math.ceil(totalProducts / productsPerPage); // حساب عدد الصفحات

    useEffect(() => {
        getAllProducts_();
        getAllCategories_();
    }, [])

    useEffect(() => {
        getProductsPerPage_(page);
    }, [page])

    const getAllProducts_ = async () => {
        const data = await getAllProducts();
        setProductList(data.products || []);
    }

    const getProductsPerPage_ = async (page) => {
        const data = await getAllProductsPerPages(page, productsPerPage);
        setVisibleProducts(data.products || []);
        setTotalProducts(data.total || 0); // إجمالي عدد المنتجات
    }

    const getAllCategories_ = async () => {
        const data = await getAllCategories();
        data.push("all product")
        data.reverse();
        setCategories(data);
    }

    const handleCategory = async (index) => {
        setActiveIndex(index);
        const data = await getProductByCategories(categories[index]);
        categories[index] !== "all product" ? setProductByCategoy(data.products) : setProductByCategoy([]);
    };

    const normalizeText = (text) => {
        return text
            .toLowerCase() // تحويل النص إلى أحرف صغيرة
            .trim() // إزالة المسافات الإضافية في البداية والنهاية
            .replace(/\s+/g, " "); // استبدال المسافات المتعددة بمسافة واحدة
    };

    const handleSearch = (term) => {
        setSearchTerm(term);

        if (term.trim() === "") {
            // 
        } else {
            // تصفية جميع المنتجات بناءً على النص
            // const filtered = productList.filter((product) => product.title.toLowerCase().includes(term.toLowerCase()));
            const filtered = productList.filter((product) => {
                const productTitle = normalizeText(product.title || ""); // تأكد من وجود title
                const searchInput = normalizeText(searchTerm);
                console.log(`Comparing "${productTitle}" with "${searchInput}"`);
                return productTitle.includes(searchInput);
            });
            setVisibleProducts(filtered); // عرض النتائج المصفاة فقط
        }
    };

    const handlePrevPage = () => {
        setPage((prev) => Math.max(prev - 1, 0))
        setSearchTerm("");
        setProductByCategoy([])
    }
    const handleNextPage = () => {
        // setPage((prev) => prev + 1)
        setPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
        setSearchTerm("");
        setProductByCategoy([])
        setActiveIndex(0)
    }
    
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber); // تغيير الصفحة
        setSearchTerm("");
        setProductByCategoy([])
        setActiveIndex(0)
    };


    return (
        // <div className='mb-32'>
        // <div className='mb-5 py-[1px]'>
        //     <BreadCrumb path={path} />
        // </div>

        //     <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-2xl lg:max-w-7xl container">
        //         <div className="gap-x-6 gap-y-10 xl:gap-x-4 grid grid-cols-1 xl:grid-cols-4">
        //             {/* Filters */}
        //             <div className="px-5">
        // <div className="relative search">
        //     <input id="search" placeholder='Search ...' name="search" type="search" autoComplete="off" required
        //         className="block border-0 px-6 py-4 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm/6 //" />
        //     <FontAwesomeIcon icon={faSearch} className='top-[50%] right-[5%] absolute w-[15px] text-[15px] text-gray-400 translate-y-[-50%]' />
        // </div>

        // <div className="mt-10 categories">
        //     <h2 className='font-semibold text-[#333] uppercase'>Categories</h2>
        //     <div className="shadow-none my-5">
        //         <div className='flex flex-wrap items-center gap-2'>
        //             {
        //                 categories.map((category, index) => {
        //                     return (
        //                         <button key={index} className={`text-[#555] text-[13px] border-[1px] border-gray-100 px-5 py-1 capitalize w-fit
        //                     hover:border-primary hover:text-primary transition ${activeIndex === index ? 'text-primary font-semibold' : ''}`}
        //                             onClick={() => handleCategory(index)}>{category}</button>
        //                     )
        //                 })
        //             }
        //         </div>
        //     </div>
        // </div>

        //                 <div className="brands">
        //                     <h2 className='my-8 font-semibold text-[#333] uppercase'>brands</h2>
        //                     <div className='flex flex-wrap items-center gap-2'>
        //                         {
        //                             productList.map((brand, index) => {
        //                                 return (
        //                                     brand.brand ?
        //                                         <button key={brand.id} className={`text-[#555] text-[13px] border-[1px] border-gray-100 px-5 py-1 capitalize w-fit
        //                                     hover:border-primary hover:text-primary transition`}
        //                                             onClick={() => handleSearch(brand.brand)}>{brand.brand}</button>
        //                                         : ""
        //                                 )
        //                             })
        //                         }
        //                     </div>
        //                 </div>

        //                 <div className="tags">
        //                     <h2 className='my-8 font-semibold text-[#333] uppercase'>Tags</h2>
        //                     <div className='flex flex-wrap items-center gap-3'>
        //                         {
        //                             productList.map(item => {
        //                                 return (
        //                                     item.tags[1] ?
        //                                         <button key={item.id} className='border-[1px] border-gray-200 hover:border-primary px-5 py-1 rounded-[15px] w-fit text-[#555] text-[13px] hover:text-primary capitalize transition //'>{new Set(item.tags[1])}</button>
        //                                         : ""
        //                                 )
        //                             })
        //                         }
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="lg:col-span-3 px-10">
        //                 {/* Sort */}
        //                 <div className='flex justify-end items-center gap-4 mb-10'>
        //                     <h5 className='float-right text-[#333] capitalize'>Sort By</h5>
        //                     <Menu as="div" className="inline-block relative text-left">
        //                         <div>
        //                             <MenuButton className="inline-flex justify-center items-center gap-x-1.5 bg-white hover:bg-gray-50 shadow-sm px-3 py-2 rounded-md ring-1 ring-gray-300 ring-inset w-full font-semibold text-gray-900 text-sm">
        //                                 Options
        //                                 <FontAwesomeIcon aria-hidden="true" icon={faAngleDown} className="-mr-1 w-5 text-[15px] text-gray-400" />
        //                             </MenuButton>
        //                         </div>

        //                         <MenuItems
        //                             transition
        //                             className="right-0 z-10 absolute bg-white data-[closed]:opacity-0 shadow-lg mt-2 rounded-md divide-y divide-gray-100 ring-1 ring-black/5 w-56 data-[closed]:transform origin-top-right transition focus:outline-none data-[closed]:scale-95 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        //                         >
        //                             {
        //                                 menuSort.map(item => {
        //                                     return (
        //                                         <div className="py-1" key={item.id}>
        //                                             <MenuItem>
        //                                                 <a
        //                                                     href="#"
        //                                                     className="flex justify-between data-[focus]:bg-gray-100 px-4 py-2 text-gray-700 text-sm data-[focus]:text-primary data-[focus]:outline-none capitalize"
        //                                                 >
        //                                                     <p className='font-medium'>{item.sortBy}</p>
        //                                                     <div className='flex items-center gap-2'>
        //                                                         <button className='hover:bg-gray-300 p-1 rounded-[50%] text-gray-400 hover:text-primary'>
        //                                                             <FontAwesomeIcon icon={faArrowUp} className="w-5 text-[15px" />
        //                                                         </button>
        //                                                         <button className='hover:bg-gray-300 p-1 rounded-[50%] text-gray-400 hover:!text-primary'>
        //                                                             <FontAwesomeIcon icon={faArrowDown} className="w-5 text-[15px" />
        //                                                         </button>
        //                                                     </div>
        //                                                 </a>
        //                                             </MenuItem>
        //                                         </div>
        //                                     )
        //                                 })
        //                             }
        //                         </MenuItems>
        //                     </Menu>
        //                 </div>

        //                 {/* Products */}
        //                 {!productByCategoy.length ? <ProductListShop productList={productList} /> : <ProductListShop productList={productByCategoy} />}
        //                 {!items.length ? <ProductListShop productList={productList} /> : <ProductListShop productList={items} />}
        //             </div>
        //         </div>
        //     </div>
        // </div >
        <div className="mb-20">
            <div className='mb-5 py-[1px]'>
                <BreadCrumb path={path} />
            </div>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-7xl container">
                <div className="relative mb-12 search">
                    <input id="search" placeholder='Search ...' name="search" type="search" autoComplete="off" required
                        className="block border-0 px-6 py-4 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                        value={searchTerm}
                        // onChange={(e) => setSearchTerm(e.target.value)}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <FontAwesomeIcon icon={faSearch} className='top-[50%] right-[2%] absolute w-[15px] text-[15px] text-gray-400 translate-y-[-50%]' />
                </div>

                <div className="my-10 categories">
                    <h2 className='font-semibold text-[#333] capitalize'>Categories</h2>
                    <div className="shadow-none my-5">
                        <div className='flex flex-wrap items-center gap-2'>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <button key={index} className={`text-[#555] text-[14px] border-[1px] border-gray-100 px-5 py-1 capitalize w-fit
                                            hover:border-primary hover:text-primary transition ${activeIndex === index ? 'text-primary border-primary font-semibold' : ''}`}
                                            onClick={() => handleCategory(index)}>{category}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div>
                    {
                        productByCategoy.length ?
                            // <ProductList productList={productByCategoy} />
                            <ProductListShop productList={productByCategoy} />
                            : visibleProducts.length ?
                                // <ProductList productList={visibleProducts} />
                                <ProductListShop productList={visibleProducts} />
                                : (<p>No products match your search term "{searchTerm}".</p>)

                    }
                    <div className='flex justify-center my-24'>
                        <nav aria-label="Pagination" className="inline-flex -space-x-px border-[1px] border-gray-200 shadow-sm rounded-md isolate">
                            <button className="inline-flex relative focus:z-20 items-center hover:bg-gray-50 px-4 py-2 rounded-l-md text-gray-400 focus:outline-offset-0"
                                onClick={() => handlePrevPage()} disabled={page === 0}><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <ul className="flex flex-wrap">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <li key={index}>
                                            <button
                                                 className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 border-x-[1px] border-gray-200
                                                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-100 
                                                    ${page === index ? 'bg-primary text-white focus-visible:outline-primary' : 'bg-white text-gray-600'}`}
                                                onClick={() => handlePageChange(index)}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            {/* <p className='inline-flex relative z-10 focus:z-20 items-center border-gray-200 border-x-[1px] bg-white px-4 py-2 font-semibold text-gray-600 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>Page {page + 1} of {totalPages}</p> */}
                            <button className="inline-flex relative focus:z-20 items-center hover:bg-gray-50 px-4 py-2 rounded-r-md text-gray-400 focus:outline-offset-0"
                                onClick={() => handleNextPage()} disabled={page >= totalPages - 1}><FontAwesomeIcon icon={faChevronRight} /></button>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
