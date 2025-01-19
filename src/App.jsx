import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import DetailProject from './pages/DetailProject';

function App() {
  useEffect(()=>{
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<DetailProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
