import Link from 'next/link'
import React from 'react'

type NavbarItemProps = {
    label: string
}

const NavbarItem : React.FC<NavbarItemProps> = ({label}) => {
  return (
    <Link href='/' className='text-white cursor-pointer hover:text-gray-300 transition'>
      {label}
    </Link>
  )
}

export default NavbarItem
