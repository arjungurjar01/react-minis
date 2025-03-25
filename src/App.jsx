import { Route, Router, Routes } from 'react-router-dom'
import CarouselPage from './projects/carousel/CarouselPage'
import CarouselUsingApi from './projects/carouselUsingApi/CarouselUsingApi'
import HomePage from './pages/HomePage'
import Layout from './layout/Layout'
import ProgressBar from './projects/progressBar/ProgressBar'
import ReactTabs from './projects/react-tabs/ReactTabs'
import AccordionPage from './projects/accordion-menu'
import InfiniteScroll from './projects/infiniteScroll'
import PaginationPage from './projects/pagination'

function App() {
 

  return (
    <>
     <div className='  bg-[#171717] w-full h-screen'>
      
     <Layout>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/carousel1' element={<CarouselPage/>} />
      <Route path='/carousel2' element={<CarouselUsingApi/>} />
      <Route path='/progressbar' element={<ProgressBar/>} />
      <Route path='/reacttabs' element={<ReactTabs/>}/>
      <Route path='/accordion' element={<AccordionPage/>} />
      <Route path='/infinitescroll' element={<InfiniteScroll/>} />
      <Route path='/pagination' element={<PaginationPage/>}/>
    </Routes>
    </Layout>
    </div>
    
    
    
    </>
  )
}

export default App
