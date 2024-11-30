import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: '/images/blog-01.webp',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: '/images/blog-02.webp',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: '/images/blog-03.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function BlogList() {
  return (
    <div className="mx-auto mb-24 px-2 sm:px-4 lg:px-0 max-w-7xl">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 className="mb-10 font-bold text-4xl text-gray-900 uppercase tracking-tight">Leatest Blogs</h2>

        <div className="lg:gap-x-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 mt-6">
          {callouts.map((callout) => (
            <div key={callout.name} className="relative group">
              <div className='rounded-lg overflow-hidden'>
                <Image
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  width={400}
                  height={400}
                  className="group-hover:scale-110 rounded-lg w-full max-sm:h-80 transition-all duration-[0.8s] object-cover sm:aspect-[2/1] lg:aspect-square"
                />
              </div>
              <h3 className="mt-6 text-gray-500 text-sm">
                <Link href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </Link>
              </h3>
              <p className="font-semibold text-base text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center py-[52px]">
        <Link href='/Blog' className='z-50 flex items-center bg-primary hover:bg-[#222] px-5 py-2 rounded-md font-normal text-lg text-white transition cursor-pointer group'>
          <span>Show Blogs</span> <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-[15px] text-[15px] transition group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  )
}