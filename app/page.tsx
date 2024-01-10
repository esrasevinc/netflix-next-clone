'use client';

import Navbar from "./components/Navbar";
import useCurrentUser from "./hooks/useCurrentUser";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Auth from "./login/page";
import Billboard from "./components/Billboard";

export default function Home() {

  const router = useRouter()
  const pathName = usePathname()
  const { data: user } = useCurrentUser()

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
      </>
      }
      </>
    )
    
}
