'use client';

import Navbar from "./components/Navbar";
import useCurrentUser from "./hooks/useCurrentUser";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Auth from "./login/page";

export default function Home() {

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
      <Navbar />
      </>
    )
    
}
