import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hero() {
    return (
        <div className="relative bg-gray-100 overflow-hidden">
            <div className="pt-16 sm:pt-24 lg:pt-40 pb-80 sm:pb-40 lg:pb-48">
                <div className="relative sm:static mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="sm:max-w-lg">
                        <h1 className="font-bold text-4xl text-gray-900 sm:text-6xl tracking-tight">
                            Summer styles are finally here
                        </h1>
                        <p className="mt-4 text-gray-500 text-xl">
                            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                            if you live or die.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl pointer-events-none"
                            >
                                <div className="sm:top-0 lg:top-1/2 sm:left-1/2 lg:left-1/2 absolute transform sm:translate-x-8 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0">
                                            <div className="sm:opacity-0 lg:opacity-100 rounded-lg w-44 h-64 overflow-hidden">
                                                <Image
                                                    alt="banner img"
                                                    src="/images/hero-img-01.webp"
                                                    className="object-cover size-full"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="rounded-lg w-44 h-64 overflow-hidden">
                                                <Image
                                                    alt="banner img"
                                                    src="/images/hero-img-02.webp"
                                                    className="object-cover size-full"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                        <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0">
                                            <div className="rounded-lg w-44 h-64 overflow-hidden">
                                                <Image
                                                    alt="banner img"
                                                    src="/images/hero-img-03.webp"
                                                    className="object-cover size-full"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="rounded-lg w-44 h-64 overflow-hidden">
                                                <Image
                                                    alt="banner img"
                                                    src="/images/hero-img-04.webp"
                                                    className="object-cover size-full"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="rounded-lg w-44 h-64 overflow-hidden">
                                                <Image
                                                    alt="banner img"
                                                    src="/images/hero-img-05.webp"
                                                    className="object-cover size-full"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                        <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0">
                                            <div className="rounded-lg w-44 h-64 overflow-hidden">
                                                <Image
                                                    alt="banner img"
                                                    src="/images/hero-img-06.webp"
                                                    className="object-cover size-full"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div className="rounded-lg w-44 h-64 overflow-hidden">
                                                <Image
                                                    alt="banner img"
                                                    src="/images/hero-img-07.webp"
                                                    className="object-cover size-full"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/Shop"
                                className="flex items-center gap-2 bg-primary hover:bg-[#222] px-8 py-3 border border-transparent rounded-md w-fit font-medium text-center text-white group"
                            >
                                Shop Collection <FontAwesomeIcon icon={faArrowRight} className='w-[15px] text-[15px] transition group-hover:translate-x-2' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
