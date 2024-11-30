'use client'
import React, { useContext, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faMagnifyingGlass, faStore, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart'
import Link from 'next/link'
import { navLinks } from "./data"
import { CartContext } from '../../_context/CartContext'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    const { cart } = useContext(CartContext)

    return (
        <header className="border-b-[1px]">
            {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
            <nav aria-label="Global" className="flex justify-between items-center mx-auto lg:px-8 p-6 max-w-7xl">
                <div className="flex lg:flex-1">
                    <a href="/" className="flex items-center gap-1 -m-1.5 p-1.5 font-semibold text-primary">
                        <FontAwesomeIcon icon={faStore} className='text-[25px]' /> Store
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="lg:flex lg:gap-x-12 hidden">
                    {
                        navLinks.map(navLink => {
                            return (
                                <Link href={navLink.link} className="font-bold text-gray-700 text-sm/6 hover:text-primary transition" key={navLink.id}>{navLink.navName}</Link>
                            )
                        })
                    }
                </PopoverGroup>
                <div className="lg:flex lg:flex-1 lg:justify-end gap-8 hidden">
                    <button className="font-semibold text-gray-900 text-sm/6 hover:text-primary">
                        <FontAwesomeIcon icon={faUser} className='text-[24px]' />
                    </button>
                    <button onClick={() => setOpenCart(true)} className='relative z-50 flex gap-1 bg-inherit hover:bg-inherit text-blue-gray-600 hover:text-primary dark:text-blue-gray-100'>
                        <FontAwesomeIcon icon={faCartShopping} className='text-[24px]' />
                        <span className='-top-3 -right-3 absolute border-[1px] border-gray-900 bg-primary rounded-full w-[18px] h-[18px] font-semibold text-[12px] text-white leading-[18px]'>{cart?.length}</span>
                    </button>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="z-10 fixed inset-0" />
                <DialogPanel className="right-0 z-10 fixed inset-y-0 bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
                    <div className="flex justify-between items-center">
                        <div></div>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 p-2.5 rounded-md text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <FontAwesomeIcon icon={faX} aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {
                                    navLinks.map(navLink => {
                                        return (
                                            <Link href={navLink.link} className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-bold text-base/7 text-gray-900 hover:text-primary" key={navLink.id}>{navLink.navName}</Link>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex justify-center items-center gap-10 py-6">
                                <button className="font-semibold text-gray-900 text-sm/6 hover:text-primary">
                                    <FontAwesomeIcon icon={faUser} className='text-[24px]' />
                                </button>
                                <button onClick={() => setOpenCart(true)} className='relative z-50 flex gap-1 bg-inherit hover:bg-inherit text-blue-gray-600 hover:text-primary dark:text-blue-gray-100'>
                                    <FontAwesomeIcon icon={faCartShopping} className='text-[24px]' />
                                    <span className='-top-3 -right-3 absolute border-[1px] border-gray-900 bg-primary rounded-full w-[18px] h-[18px] font-semibold text-[12px] text-white leading-[18px]'>{cart?.length}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header
