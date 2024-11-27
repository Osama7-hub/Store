import React from 'react'

function SkeletonSimilarProduct() {
    return (
        <div className='flex gap-5 my-3'>
            <div className='flex flex-col gap-2'>
                <div className='bg-slate-200 rounded-lg w-[300px] h-[300px] animate-pulse'></div>
                <div className='flex justify-between items-center'>
                    <div className='bg-slate-200 w-[200px] h-[20px] animate-pulse'></div>
                    <div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
                </div>
                <div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='bg-slate-200 rounded-lg w-[300px] h-[300px] animate-pulse'></div>
                <div className='flex justify-between items-center'>
                    <div className='bg-slate-200 w-[200px] h-[20px] animate-pulse'></div>
                    <div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
                </div>
                <div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='bg-slate-200 rounded-lg w-[300px] h-[300px] animate-pulse'></div>
                <div className='flex justify-between items-center'>
                    <div className='bg-slate-200 w-[200px] h-[20px] animate-pulse'></div>
                    <div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
                </div>
                <div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='bg-slate-200 rounded-lg w-[300px] h-[300px] animate-pulse'></div>
                <div className='flex justify-between items-center'>
                    <div className='bg-slate-200 w-[200px] h-[20px] animate-pulse'></div>
                    <div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
                </div>
                <div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
            </div>
        </div>
    )
}

export default SkeletonSimilarProduct
