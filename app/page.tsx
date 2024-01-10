'use client';

import Navbar from "./components/Navbar";
import useCurrentUser from "./hooks/useCurrentUser";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Auth from "./login/page";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import useMovieList from "./hooks/useMovieList";

export default function Home() {

  const router = useRouter()
  const pathName = usePathname()
  const { data: user } = useCurrentUser()
  const { data: movies = [] } = useMovieList()

  useEffect(() => {
    router.push(pathName)
  }, [user])

  function AuthLogin() {
    useEffect(() => {
      router.push('/login')
    }, [])
    return <Auth />
  }
  
    return (
      <>
      {!user ? 
      <AuthLogin /> 
      :
      <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title='Trending Now' data={movies}/>
      </div>
      </>
      }
      </>
    )
    
}
