'use client';

import React from 'react'
import useMovie from '@/app/hooks/useMovie'
import { useParams, useSearchParams } from 'next/navigation'
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const Watch = () => {
    const params = useParams()
    
    const { data } = useMovie(params.movieId as string);
    const router = useRouter()
    

  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black/70'>
        <FaArrowLeft onClick={() => router.push('/')} className='text-white cursor-pointer' size={40} />
        <p className='text-white text-xl lg:text-3xl font-bold'>
            <span className='font-light'>
                Watching:
            </span>
            {data?.title}
        </p>
      </nav>
      <video src={data?.videoUrl} 
      className='h-full w-full'
      autoPlay
      controls
      ></video>
      
    </div>
  )
}

export default Watch
