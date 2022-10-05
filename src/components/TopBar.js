import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { FiSearch } from "react-icons/fi"


// bg-[#121212]
function TopBar() {

  const navigate = useNavigate()
  const  [searchTerm , setSearchTerm] = useState("")

  const handleSubmit = () => {
  
    navigate(`/search/${searchTerm}`)
  }

  return (
    <div className='w-full bg-[#121212] h-14 flex flex-row justify-center items-center 
    sm:justify-between sm:px-5 sm:py-4
    md:py-7
    sticky top-0 z-30
    '>
        
        <img src="https://i0.wp.com/www.victorygreenhills.org/wp/wp-content/uploads/2017/01/Music-Ministry-Icon-White.png?fit=720%2C720&ssl=1" alt="topbar-logo" 
        className='hidden sm:block sm:w-12 '
        />

        <div className='flex flex-row justify-center items-center w-full h-12 '>
        
         
            <input 
                type="search"
                placeholder='Search any music....'
                className='w-10/12 h-10 px-5 py-2 rounded-3xl bg-[#212121] text-white sm:w-1/2 lg:w-1/3'
                autoComplete='off'
                name='search-field'
                id='search-field'
                
                onChange={(e) => setSearchTerm(e.target.value)}
            />
         
          <FiSearch 
          onClick={handleSubmit}
          className='text-white font-bold w-5 h-5 mx-2 hover:cursor-pointer' />
        </div>

         <img src="https://th.bing.com/th/id/R.3a292081290bf29935d352f21f8d054b?rik=2tNSlBcQ%2fdAhDw&riu=http%3a%2f%2fvergabe.hamburgwasser.de%2fNetServer%2f_images%2fimg%2ficon_account_white.png&ehk=iBB3TPASRwtGN9cIH0WtcYxQJMJItMKNxjRVYpJJMXs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="account-logo" 
         className='hidden sm:block sm:w-7'
         />

    </div>
  )
}

export default TopBar