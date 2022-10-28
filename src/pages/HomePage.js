import React from 'react'
import { useGetTopChartsQuery } from '../Redux/services/ShazamCore'
import SongCard from '../components/SongCard'
import { useSelector } from 'react-redux'
import { Routes , Route } from "react-router-dom"
import TopPlay from "../components/TopPlay" ;


// border-1 border-solid border

function HomePage() {


    const {data, isFetching, error} = useGetTopChartsQuery()
    console.log(data)

    const {activeSong , isPlaying} = useSelector(state => state.player)

  return (
    <div className='w-full min-h-screen flex flex-col px-3 py-2  bg-gradient-to-b from-gray-800 to-black m-2 rounded-lg '>
        
       
    {/*--------- First Section - Heading ---------*/} 
    <div className="w-full h-16 flex flex-row justify-start items-center px-4 py-5  
                     md:px-6    
                     xl:px-12

    ">
        <h1 className="font-bold text-2xl text-white 
                                md:text-3xl 
                                lg:text-4xl    
            ">Discover</h1>   


            
    </div>

    {/* --------- Second Section - Top songs ---------*/}
    <div className='flex flex-row justify-center flex-wrap'>
      {data && data.map((song , index) => {
          return (
              <SongCard 
              key={song.key}
              index = {index}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              />
          )
      })}
    </div>


    {/* <TopPlay /> */}
    </div>
  )
}

export default HomePage