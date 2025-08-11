import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'; 
import MusicPlayer from './components/musicPlayer';
import '@flaticon/flaticon-uicons/css/all/all.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
          path='/'
          element={<Home/>} 
          />
        </Routes>
      </div> 
      <MusicPlayer />    
      </BrowserRouter>
      
    </div>
  );
}

export default App;
