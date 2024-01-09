import React from 'react'
import { signOut } from 'next-auth/react'

type AccountMenuProps = {
    visible?: Boolean
}

const AccountMenu : React.FC<AccountMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }

  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col gap-3'>
        <div className='px-3 group/item flex flex-row gap-3 w-full items-center'>
            <img className='w-8 rounded-md' src='/images/blue.png' alt=''/>
            <p className='text-white text-sm group-hover/item:underline'>Username</p>
        </div>
        <hr className='bg-gray-600 border-0 h-px my-4'/>
        <div  className='bg-gray-800 px-3 text-center text-white text-sm hover:underline'>Sign Out</div>
      </div>
    </div>
  )
}

export default AccountMenu
