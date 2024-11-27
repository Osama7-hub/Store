import React from 'react'

function HeroPages({title}) {
    return (
        <div className=''>
            <section className={"h-[20vh] sm:h-[30vh] relative bg-[url('/_next/image?url=%2F.%2Fimages%2Fabout-bg.webp&w=3840&q=75')] bg-cover bg-center bg-no-repeat"}>
                <div className="absolute w-full h-full inset-0 bg-gray-900/75 sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
                <div className="flex justify-center items-center mx-auto h-full">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl z-10">{title}</h1>
                </div>
            </section>
        </div>
    )
}

export default HeroPages
