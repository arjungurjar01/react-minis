import { Route, Router, Routes } from 'react-router-dom'
import CarouselPage from './projects/carousel/CarouselPage'
import CarouselUsingApi from './projects/carouselUsingApi/CarouselUsingApi'
import HomePage from './pages/HomePage'
import Layout from './layout/Layout'
import ProgressBar from './projects/progressBar/ProgressBar'

function App() {
 

  return (
    <>
    {/* <div>Hello</div> */}
    
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route path='/carousel1' element={<CarouselPage/>} />
      <Route path='/carousel2' element={<CarouselUsingApi/>} />
      <Route path='/progressbar' element={<ProgressBar/>} />


    </Routes>
    
    
    
    </>
  )
}

export default App
