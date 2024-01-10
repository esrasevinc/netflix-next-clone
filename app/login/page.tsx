"use client";

import React, { useCallback, useState } from 'react'
import Input from '../components/Input'
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Auth = () => {

  const router = useRouter();

  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')

  const [ variant, setVariant ] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((curVariant) => curVariant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl:  '/profiles'
      })
      
    }
    catch (error) {
      console.log(error)
    }
  }, [email, password, router])


  const register = useCallback(async () => {
      try {
          await axios.post('/api/auth/register', {
            email, name, password
          })
          login();
      } 
      catch (error) {
        console.log(error)
      }
  }, [email, name, password, login])


  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-fixed bg-center">
      <div className='h-full w-full bg-black lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
            <img src='/images/logo.png' alt='logo' className='h-12'></img>
        </nav>
        <div className='flex justify-center'>
            <div className='bg-black/70 px-16 py-16 self-center lg:w-2/5 mt-2 lg:max-w-md rounded-md w-full'>
                <h2 className='text-white text-4xl font-semibold mb-8'>
                  {variant === 'login' ? 'Sign In' : 'Register'}
                </h2>
                <div className='flex flex-col gap-4'>
                    <Input 
                      label='E-mail'
                      onChange={(e: any) => {setEmail(e.target.value)}}
                      id='email'
                      type='email'
                      value={email}
                    />
                    {variant === 'register' && (
                    <Input 
                      label='Username'
                      onChange={(e: any) => {setName(e.target.value)}}
                      id='name'
                      type='name'
                      value={name}
                    />
                    )}
                    <Input 
                      label='Password'
                      onChange={(e: any) => {setPassword(e.target.value)}}
                      id='password'
                      type='password'
                      value={password}
                    />
                </div>
                <button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition '>
                  {variant === 'login' ? 'Login' : 'Sign Up'}
                </button>
                <p className='text-neutral-500 mt-12'>
                  {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                  
                  <span className='text-white ml-1 hover:underline cursor-pointer' onClick={toggleVariant}>
                    {variant === 'login' ? 'Create an account' : 'Login'}
                  </span>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
