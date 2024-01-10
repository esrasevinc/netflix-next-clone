'use client';

import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useCurrentUser from '../hooks/useCurrentUser'
import Auth from '../login/page'

const Profiles = () => {

  const router = useRouter()
  const { data: user } = useCurrentUser()

  const AuthLogin = () => {
    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
    }, [user]);
  
    return <Auth />
  }

  return (
    <>
      <AuthLogin />
      <p className='text-4xl text-white'>
        Profiles
      </p>
    </>
  )
}

export default Profiles
