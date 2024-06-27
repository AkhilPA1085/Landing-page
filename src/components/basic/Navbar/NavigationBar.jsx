import Link from 'next/link'
import React from 'react'

const NavigationBar = ({menu}) => {
  return (
    <div className='hidden md:flex items-center gap-4'>
        {menu?.map((item,index)=>(
            <Link href={item?.url} key={index} className='uppercase text-white font-semibold'>
                {item?.name}
            </Link>
        ))}
    </div>
  )
}

export default NavigationBar