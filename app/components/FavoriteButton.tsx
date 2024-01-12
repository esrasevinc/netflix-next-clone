'use client';

import axios from "axios";
import React, { useCallback, useMemo } from 'react'
import useCurrentUser from "../hooks/useCurrentUser";
import useFavorite from "../hooks/useFavorite";
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

type FavoriteButtonProps = {
    movieId: string
}

const FavoriteButton : React.FC<FavoriteButtonProps> = ({ movieId }) => {

    const { mutate: mutateFavorites } = useFavorite()
    const { data: currentUser, mutate } = useCurrentUser()

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || []

        return list.includes(movieId)
    }, [currentUser, movieId])

    const toggleFavorites = useCallback(async () => {
        let response;

        if (isFavorite) {
            response = await axios.delete('/api/favorite', {data: {movieId}})
        } else {
            response = await axios.post('/api/favorite', {movieId})
        }

        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds
        });

        mutateFavorites()

    }, [movieId, isFavorite, mutate, mutateFavorites, currentUser]);

    const Icon = isFavorite ? FaCheck : FiPlus;

  return (
    <div onClick={toggleFavorites} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex items-center justify-center transition hover:border-neutral-300">
      <Icon className='text-white' size={25} />
    </div>
  )
}

export default FavoriteButton
