import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'

function BreadCrumb({ path }) {
    return (
        < nav aria-label="Breadcrumb" className="flex my-20 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <ol className="flex items-center gap-1 text-sm text-gray-600">
                <li className='hover:text-primary'>
                    <Link href="/" className="flex items-center transition">
                        <FontAwesomeIcon icon={faHome} className='w-[12px] text-[12px]' />
                        <span className="ms-1.5 text-xs font-medium"> Home </span>
                    </Link>
                </li>
                {path?.split('/')[1] ? <li className="rtl:rotate-180"><FontAwesomeIcon icon={faChevronRight} className='w-[11px] text-[11px] text-[#555] px-1' /></li>: ""}
                <li><Link href="#" className="block transition hover:text-gray-700"> {path?.split('/')[1]} </Link></li>
                {path?.split('/')[2] ? <li className="rtl:rotate-180"><FontAwesomeIcon icon={faChevronRight} className='w-[11px] text-[11px] text-[#555] px-1' /></li>: ""}
                <li><Link href="#" className="block transition hover:text-gray-700"> {path?.split('/')[2]} </Link></li>
            </ol>
        </nav >
    )
}

export default BreadCrumb