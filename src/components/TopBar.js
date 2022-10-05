import React from 'react'
// bg-[#121212]
function TopBar() {
  return (
    <div className='w-full bg-[#121212] h-14 flex flex-row justify-center items-center 
    sm:justify-between sm:px-5 sm:py-4
    md:py-7
    sticky top-0 z-30
    '>
        
        <img src="https://i0.wp.com/www.victorygreenhills.org/wp/wp-content/uploads/2017/01/Music-Ministry-Icon-White.png?fit=720%2C720&ssl=1" alt="topbar-logo" 
        className='hidden sm:block sm:w-12 '
        />

        <input 
            type="text"
            placeholder='Search any music....'
            className='w-9/12 h-10 px-5 py-2 rounded-3xl bg-[#212121] text-white sm:w-1/2 lg:w-1/3'
         />

         <img src="https://th.bing.com/th/id/R.3a292081290bf29935d352f21f8d054b?rik=2tNSlBcQ%2fdAhDw&riu=http%3a%2f%2fvergabe.hamburgwasser.de%2fNetServer%2f_images%2fimg%2ficon_account_white.png&ehk=iBB3TPASRwtGN9cIH0WtcYxQJMJItMKNxjRVYpJJMXs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="account-logo" 
         className='hidden sm:block sm:w-7'
         />

    </div>
  )
}

export default TopBar