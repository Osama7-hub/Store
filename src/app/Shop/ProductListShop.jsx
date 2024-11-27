import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductListShop({ productList }) {
    // const [currentPage, setCurrentPage] = useState(1); // الصفحة الحالية
    // const [itemsPerPage] = useState(10); // عدد المنتجات لكل صفحة
    // const [totalPages, setTotalPages] = useState(1); // العدد الكلي للصفحات


    // جلب البيانات من API
    // useEffect(() => {
    //     currentItems()
    // }, [itemsPerPage]);

    // // تحديد المنتجات المعروضة في الصفحة الحالية
    // const currentItems = productList.slice(
    //     (currentPage - 1) * itemsPerPage,
    //     currentPage * itemsPerPage
    // );

    // // التنقل إلى الصفحة التالية
    // const handleNext = () => {
    //     if (currentPage < totalPages) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };

    // // التنقل إلى الصفحة السابقة
    // const handlePrevious = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };

    // // إنشاء أرقام الصفحات
    // const renderPageNumbers = () => {
    //     return Array.from({ length: totalPages }, (_, index) => (
    //         <button
    //             key={index + 1}
    //             onClick={() => setCurrentPage(index + 1)}
    //             style={{
    //                 margin: "0 5px",
    //                 padding: "5px 10px",
    //                 backgroundColor: currentPage === index + 1 ? "#007BFF" : "#FFF",
    //                 color: currentPage === index + 1 ? "#FFF" : "#000",
    //                 border: "1px solid #CCC",
    //                 borderRadius: "5px",
    //                 cursor: "pointer",
    //             }}
    //         >
    //             {index + 1}
    //         </button>
    //     ));
    // };

    return (
        // <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
        //     {
        //         productList.map((product) => (
        //             <div key={product.id} className="group relative">
        //                 <div className='overflow-hidden'>
        //                     <Image
        //                         src={product.thumbnail}
        //                         alt={product.title}
        //                         className="aspect-square w-full rounded-md bg-gray-200 object-cover transition duration-[0.5s] group-hover:scale-110 lg:aspect-auto lg:h-80"
        //                         width={500}
        //                         height={500}
        //                     />
        //                 </div>
        //                 <div className="mt-4 flex justify-between">
        //                     <div>
        //                         <h3 className="text-sm text-gray-700">
        //                             <Link href={`/product-details/${product.id}`} className='text-primary font-semibold'>
        //                                 <span aria-hidden="true" className="absolute inset-0" />
        //                                 {product.title}
        //                             </Link>
        //                         </h3>
        //                         <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        //                     </div>
        //                     <p className="text-sm font-medium text-gray-900">${product.price}</p>
        //                 </div>
        //             </div>
        //         ))
        //     }
        // </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
                productList.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className='overflow-hidden'>
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover transition duration-[0.5s] group-hover:scale-110 lg:aspect-auto lg:h-80"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <Link href={`/product-details/${product.id}`} className='text-primary font-semibold'>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.title}
                                    </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">${product.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductListShop