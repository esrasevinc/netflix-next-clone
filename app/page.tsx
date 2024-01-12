'use client';

import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import useMovieList from "./hooks/useMovieList";
import useFavorite from "./hooks/useFavorite";
import InfoModal from "./components/InfoModal";
import useInfoModalStore from "./hooks/useInfoModalStore";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {

  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorite()
  const { isOpen, closeModal } = useInfoModalStore()

  const { data : session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  
    return (
      <>
      {session && 
        (<>
        <InfoModal visible={isOpen} onClose={closeModal} />
        <Navbar />
        <Billboard />
        <div className="pb-40">
          <MovieList title='Trending Now' data={movies}/>
          <MovieList title='My List' data={favorites}/>
        </div>
        </>)
      }
      </>
    )
}
