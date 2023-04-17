import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Graph from './graph'

export default function Home() {
  return (
    <main className='bg-gray-200 h-screen w-screen px-64 pt-12'>
       <Graph />
    </main>
  )
}
