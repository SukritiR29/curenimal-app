"use client"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const LostFound = () => {

    const router = useRouter();

    useEffect(() => {
        const storeEmail = localStorage.getItem('email')
        if(!storeEmail) {
            router.push('/FirebaseLogin')
        }
    }, [])
  return (
    <div>Lost and Found</div>
  )
}

export default LostFound