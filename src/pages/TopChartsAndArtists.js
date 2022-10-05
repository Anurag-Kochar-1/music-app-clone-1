import React from 'react'
import "../App.css"
import TopPlay from '../components/TopPlay'

function TopChartsAndArtists() {
  return (
    <div className='w-full min-h-screen flex flex-col px-3 py-2  bg-gradient-to-b from-purple-800 to-green-400 m-2 rounded-lg'>
    {/* <div className='w-full min-h-screen flex flex-col px-3 py-2  bg-gradient-to-b from-gray-800 to-black m-2 rounded-lg'> */}
        <h1 className='text-4xl text-sky-500 font-extrabold'> asdadasdasdasd </h1>
        <TopPlay />

    </div>
  )
}

export default TopChartsAndArtists