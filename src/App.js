import './App.css';
import BottomMusicPlayer from './components/MusicPlayer/BottomMusicPlayer';
import { useSelector } from 'react-redux';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';
import MusicPlayer from './components/MusicPlayer';
import {PlayerReducer} from './Redux/features/PlayerSlice';

function App() {

  const { activeSong } = useSelector((state) => state.player);
  // bg-[#121212]
  return (
    <div className="w-full min-h-screen flex flex-col  bg-[#121212]">
      
      <TopBar />


     <div className='w-full min-h-full flex flex-row items-start '>
        <SideBar />
        <HomePage />
     </div>

     {/* <BottomMusicPlayer/> */}
     { <MusicPlayer />}

    </div>
  );
}

export default App;
