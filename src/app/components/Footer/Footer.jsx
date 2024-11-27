import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faCcAmazonPay, faCcPaypal, faCcStripe, faCcVisa } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="bg-[#222]">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center text-primary">
                    <FontAwesomeIcon icon={faStore} className='w-24 text-[4rem]' />
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                    itaque neque.
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-gray-300">
                    <li><a className="transition hover:text-primary" href="#">Home</a></li>
                    <li><a className="transition hover:text-primary" href="#">Shop</a></li>
                    <li><a className="transition hover:text-primary" href="#">Blog</a></li>
                    <li><a className="transition hover:text-primary" href="#">About</a></li>
                    <li><a className="transition hover:text-primary" href="#">Contact</a></li>
                </ul>

                <ul className="mt-12 flex justify-center gap-2 md:gap-4 text-gray-300">
                    <li>
                        <a href="#" rel="noreferrer" target="_blank" className="transition hover:text-primary">
                            <span className="sr-only">Facebook</span>
                            <FontAwesomeIcon icon={faCcVisa} className='text-[35px]' />
                        </a>
                    </li>

                    <li>
                        <a href="#" rel="noreferrer" target="_blank" className="transition hover:text-primary">
                            <span className="sr-only">Instagram</span>
                            <FontAwesomeIcon icon={faCcPaypal} className='text-[35px]' />
                        </a>
                    </li>

                    <li>
                        <a href="#" rel="noreferrer"target="_blank" className="transition hover:text-primary">
                            <span className="sr-only">Twitter</span>
                            <FontAwesomeIcon icon={faCcAmazonPay} className='text-[35px]' />
                        </a>
                    </li>

               

                    <li>
                        <a href="#" rel="noreferrer" target="_blank" className="transition hover:text-primary">
                            <span className="sr-only">Dribbble</span>
                            <FontAwesomeIcon icon={faCcStripe} className='text-[35px]' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
