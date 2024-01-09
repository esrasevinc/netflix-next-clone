import React from 'react'
import axios from 'axios'

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

const Profiles = () => {

  return (
    <div>
      <p className='text-4xl text-white'>
        Profiles
      </p>
    </div>
  )
}

export default Profiles
