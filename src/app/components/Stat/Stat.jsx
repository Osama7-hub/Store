import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {stats} from "./data"

function Stat() {
    return (
        <div className='container mx-auto'>
            <div className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                {
                    stats.map(stat => {
                        return (
                            <div className='flex gap-3 items-center justify-center' key={stat.id}>
                                <FontAwesomeIcon icon={stat.icon} className='text-primary text-[30px] w-[30px]' />
                                <div className="flex flex-col px-4 py-8 text-center">
                                    <span className="text-xl font-medium text-[#333]">{stat.feat}</span>
                                    <span className="font-light text-[#555] md:text-[16px]">{stat.featDisc}</span>
                                </div>
                            </div>
                        )
                    })
                }
              
            </div>
        </div>
    )
}

export default Stat
