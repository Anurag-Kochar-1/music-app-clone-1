import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="hidden 
                    md:block md:w-1/4 md:min-h-screen md:px-4
                    lg:w-1/5
                    xl:w-1/4 
                    2xl:w-1/5 
                    ">

       <div className='bg-[#212121] flex flex-col items-start px-4 py-4

                        md:w-1/5 md:h-screen md:rounded-lg
                        md:fixed md:top-16 md:left-1.5 md:bottom-0  
                         lg:w-1/6
                         xl:w-[19vw]   '>
       

        <Link to={'/'}>
          <h2 className='text-white font-medium text-lg py-4 hover:text-xl cursor-pointer hover:text-gray-300' > Home  </h2>
        </Link>

        <h2 className='text-white font-medium text-lg py-4 hover:text-xl cursor-pointer hover:text-gray-300' > Around Me </h2>

        <Link to={'/top-charts-and-artists'}>
          <h2 className='text-white font-medium text-lg py-4 hover:text-xl cursor-pointer hover:text-gray-300' > Top Charts and Artists </h2>
        </Link>
        

       </div>

    </div>
  )
}

export default SideBar