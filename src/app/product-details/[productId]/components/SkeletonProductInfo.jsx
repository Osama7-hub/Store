import React from 'react'

function SkeletonProductInfo() {
	return (
		<div className='flex flex-col gap-5'>
			<div className='bg-slate-200 w-[70px] h-[20px] animate-pulse'></div>
			<div className='bg-slate-200 w-[200px] h-[20px] animate-pulse'></div>
			<div className='bg-slate-200 w-[400px] h-[20px] animate-pulse'></div>
			<div className='bg-slate-200 w-[400px] h-[20px] animate-pulse'></div>
			<div className='bg-slate-200 w-[400px] h-[20px] animate-pulse'></div>
			<hr className='opacity-45' />
			<div className='flex justify-between items-center'>
				<div className='bg-slate-200 w-[100px] h-[30px] animate-pulse'></div>
				<div className='bg-slate-200 w-[150px] h-[30px] animate-pulse'></div>
			</div>
		</div>
	)
}

export default SkeletonProductInfo