import React from 'react'
import HeroPages from '../components/HeroPages/HeroPages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <>
            <HeroPages title={"Contact"} />
            <section className="pb-[116px] pt-[104px]">
                <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-wrap flex-col lg:flex-row">
                        <div className="border-[1px] border-[#e6e6e6] w-full lg:w-1/2 px-[70px] lg:px-15 pt-[55px] pb-[70px]">
                            <form>
                                <h4 className="text-[24px] leading-[1.5] text-[#333] text-center pb-[30px]">Send Us A Message</h4>

                                <div className="email relative">
                                    <input className="border-[1px] border-[#e6e6e6] text-[13px] leading-[1.6923] text-[#333] plh3 w-full h-[50px] pl-[62px] pr-[30px]" type="text" name="email" placeholder="Your Email Address" />
                                    <FontAwesomeIcon icon={faEnvelope} className='w-[15px] text-[15px] text-gray-400 absolute top-[50%] left-[5%] translate-y-[-50%]' />
                                </div>

                                <div className="my-[30px]">
                                    <textarea className="border-[1px] border-[#e6e6e6] rounded-[2px]s text-[13px] leading-[1.6923] w-full min-h-[199px] text-[#333] plh3 px-[28px] py-[25px]" name="msg" placeholder="How Can We Help?"></textarea>
                                </div>

                                <button className="flex justify-center items-center transition duration-[0.4s] cursor-pointer px-[15px] bg-[#222] hover:bg-primary rounded-[23px] w-full h-[46px] leading-[1.466667] uppercase text-[15px] text-white bor1 hov-btn3">
                                    Submit
                                </button>
                            </form>
                        </div>

                        <div className="border-[1px] border-[#e6e6e6] w-full lg:w-1/2 flex flex-col flex-wrap justify-center px-[40px] lg:px-[93px] py-[60px] lg:py-[30px]">
                            <div className="flex flex-wrap w-full pb-[42px]">
                                <span className="text-[#222] text-center text-[18px] w-[30px] lg:w-[60px]">
                                    <FontAwesomeIcon icon={faLocationDot} className='font-[400] text-[20px] w-[20px]' />
                                </span>

                                <div className="pt-[2px]">
                                    <span className="text-[#333] text-[18px] leading-[1.222222]">
                                        Address
                                    </span>

                                    <p className="pt-[18px] max-w-[245px] text-[15px] leading-[1.666667] text-[#888]">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap w-full pb-[42px]">
                                <span className="text-[#222] text-center text-[18px] w-[30px] lg:w-[60px]">
                                    <FontAwesomeIcon icon={faPhoneFlip} className='font-[400] text-[20px] w-[20px]' />
                                </span>

                                <div className="pt-[2px]">
                                    <span className="text-[#333] text-[18px] leading-[1.222222]">
                                        Lets Talk
                                    </span>

                                    <p className="pt-[18px] max-w-[245px] text-[15px] leading-[1.666667] text-[#888]">
                                        +1 800 1236879
                                    </p>
                                </div>
                            </div>

                            <div className="flex  flex-wrap w-full pb-[42px]">
                                <span className="text-[#222] text-center text-[18px] w-[30px] lg:w-[60px]">
                                    <FontAwesomeIcon icon={faEnvelope} className='font-[400] text-[20px] w-[20px]' />
                                </span>

                                <div className="pt-[2px]">
                                    <span className="text-[#333] text-[18px] leading-[1.222222]">
                                        Sale Support
                                    </span>

                                    <p className="pt-[18px] max-w-[245px] text-[15px] leading-[1.666667] text-[#888]">
                                        contact@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <div id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61485.081100443924!2d32.58708290260776!3d15.601392933207746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e8e20509ad751%3A0x978f790d66a13a75!2sSo%20sweet%20baby%20Boutique!5e0!3m2!1sar!2s!4v1732099118516!5m2!1sar!2s"
                    width="100%" height="390" style={{ border: 0 }} allowFullScreen="" loading="lazy" aria-hidden="false" referrerpolicy="no-referrer-when-downgrade"
                    tabIndex="0"></iframe>
            </div>
        </>
    )
}

export default Contact
