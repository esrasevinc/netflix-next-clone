'use client';

import React from 'react'
import { useRouter } from 'next/navigation'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Profiles = () => {

  const router = useRouter()

  const { data : session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  return (
    <>
    {session &&
    <div className='flex items-center h-full justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl md:text-6xl text-center text-white'>Who is watching?</h1>
        <div className='flex items-start justify-centergap-8 mt-10'>
          <div onClick={() => {router.push('/')}}> 
            <div className='group flex-row w-44 mx-auto'>
              <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
                <img src='/images/blue.png' alt='Profile' />
              </div>
              <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>
                  {session?.user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default Profiles
