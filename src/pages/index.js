import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Visitor from './visitor'

export default function Home() {
  return (
    <main className='bg-gray-200 h-screen w-screen px-64 pt-12'>
       <Visitor />
    </main>
  )
}
