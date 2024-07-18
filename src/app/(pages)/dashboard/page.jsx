"use client"
import Dashboard from '@/app/dashboard/dashboard'
import Layout from '@/components/layout/layout';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function page() {

    // const router = useRouter();
  
    // useEffect(() => {
    //   const token = localStorage.getItem('userToken'); // Retrieve your token
  
    //   if (!token) {
    //     router.push('/login'); // Redirect to login if not authenticated
    //   }
    // }, [router]);


  return (
    <Layout>
        <Dashboard />
    </Layout>
  )
}
