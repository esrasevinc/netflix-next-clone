'use client';

import React, { useCallback } from 'react'
import useBillboard from '../hooks/useBillboard'
import { CiCircleInfo } from "react-icons/ci";
import PlayButton from './PlayButton';
import useInfoModalStore from '../hooks/useInfoModalStore';

const Billboard = () => {

  const { openModal } = useInfoModalStore();
  const { data } = useBillboard();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <>
    <div className='relative h-[56.25vw]'>
      <video 
      className='w-full h-[56.25vw] brightness-[60%] object-cover'
      autoPlay
      muted
      loop
      src={data?.videoUrl}
      poster={data?.thumbnailUrl}
      >
      </video>
      <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='text-white text-xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl'>{data?.title}</p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>{data?.description}</p>
      
      <div className='flex flex-row items-center mt-3 md:t-4 gap-3'>
        <PlayButton movieId={data?.id} />
        <button 
        onClick={handleOpenModal}
        className='bg-white/30 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-white20 transition'>
          <CiCircleInfo className='mr-1'/>
          More Info
          </button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Billboard
