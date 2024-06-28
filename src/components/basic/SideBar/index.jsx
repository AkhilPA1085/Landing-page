import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  return (
    <div className="flex flex-col gap-4">
        <Image src={"/images/icons/social-icons.png"} alt='icons' height={40} width={40}/>
    </div>
  )
}

export default SideBar