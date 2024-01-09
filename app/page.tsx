'use client';

import Navbar from "./components/Navbar";
import { signOut } from "next-auth/react";
import useCurrentUser from "./hooks/useCurrentUser";
import axios from "axios";

export async function getProps() {
  const session = await axios.get('/api/current')

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {

  const { data: user } = useCurrentUser();
  
  return (
    <>
    <Navbar />
    <p className="text-white">Logged in as : {user?.name}</p>
    <div>
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>Sign Outtt</button>
    </div>
    
    </>
  )
}
