import React from 'react'
import { signOut } from 'next-auth/react'
import useCurrentUser from '../hooks/useCurrentUser'

type AccountMenuProps = {
    visible?: Boolean
}

const AccountMenu : React.FC<AccountMenuProps> = ({ visible }) => {

    const { data } = useCurrentUser()

    if (!visible) {
        return null;
    }

  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col gap-3'>
        <div className='px-3 group/item flex flex-row gap-3 w-full items-center'>
            <img className='w-8 rounded-md' src='/images/blue.png' alt=''/>
            <p className='text-white text-sm group-hover/item:underline'>{data?.name}</p>
        </div>
        <hr className='bg-gray-800 border-0 h-px my-2'/>
        <div className='bg-gray-800 px-3 py-2 text-center text-white text-sm hover:underline' onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}>Sign Out</div>
      </div>
    </div>
  )
}

export default AccountMenu
