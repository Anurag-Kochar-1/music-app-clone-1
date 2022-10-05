import './App.css';
import BottomMusicPlayer from './components/MusicPlayer/BottomMusicPlayer';
import { useSelector } from 'react-redux';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';
import TopPlay from './components/TopPlay';
import PageNotFound from "./pages/PageNotFound"
import MusicPlayer from './components/MusicPlayer';
import { Routes , Route } from "react-router-dom"
import SearchPage from './pages/SearchPage';

function App() {

  const { activeSong } = useSelector((state) => state.player);
  // bg-[#121212]
  return (
    <div className="w-full min-h-screen flex flex-col  bg-[#121212]">
      
      <TopBar />


     <div className='w-full min-h-full flex flex-row items-start '>
        <SideBar />
        
        <Routes>
          <Route index element={<HomePage />} /> 
          <Route path="/search/:searchTerm" element={<SearchPage />} />     
        </Routes>

       
     </div>
      
     {/* <BottomMusicPlayer/> */}

     
     
     { activeSong.title && <MusicPlayer />}

     

    </div>
  );
}

export default App;
