import React from 'react'
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";

import Logo from '../../assets/images/logo.png'
import HeaderItem from '../HeaderItem';

function Header() {
  const menu = [
    {
      name: 'HOME',
      icon: HiHome,
    },
    {
      name: 'SEACRH',
      icon: HiMagnifyingGlass,
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus,
    },
    {
      name: 'ORIGINALS',
      icon: HiStar,
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle,
    },
    {
      name: 'SERIES',
      icon: HiTv,
    }
  ]

  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
        <img src={Logo} className='w-[80px] md:w-[115px] object-cover'/>
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header
