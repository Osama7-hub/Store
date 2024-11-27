import React from 'react'

function SkeletonProductBanner() {
    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-7xl'>
            <div className='bg-slate-200 rounded-lg w-[400px] h-[300px] animate-pulse'></div>
            <div className='flex gap-2 my-3'>
                <div className='bg-slate-200 rounded-lg w-[100px] h-[100px] animate-pulse'></div>
                <div className='bg-slate-200 rounded-lg w-[100px] h-[100px] animate-pulse'></div>
                <div className='bg-slate-200 rounded-lg w-[100px] h-[100px] animate-pulse'></div>
                <div className='bg-slate-200 rounded-lg w-[100px] h-[100px] animate-pulse'></div>
            </div>
        </div>
    )
}

export default SkeletonProductBanner
