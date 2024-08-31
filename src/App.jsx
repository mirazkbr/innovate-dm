import React from 'react'
import element from "/element.svg";
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import About from './components/about/About';
import Showcase from './components/showcase/Showcase';
import Skills from './components/skills/Skills';
import FeedBack from './components/feedBack/FeedBack';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Gradient from './components/gradient/Gradient';

const App = () => {
  return (
    <>
      <div id='main' className='w-full h-screen relative pt-8'>
        {/* background */}
        <div className='w-full h-auto absolute top-0 left-0 z-[-1]'>
          <img src={element} alt="" className='w-full h-auto object-contain'/>
        </div>
        {/* gradient block */}
        <div className='w-full h-full absolute top-0 left-0 z-[-2]'>
            <div className='w-full h-full bg-white absolute top-0 left-0 z-[-3] opacity-20 blur-[30px]'>

            </div>
            <div className='w-full h-full absolute top-0 left-0 z-[-4]'>
                <div>
                    <Gradient/>
                </div>
            </div>
        </div>
        {/* components */}
        <div className=''>
          <Navbar/>
          <Banner/>
          <Services/>
          <About/>
          <Showcase/>
          <Skills/>
          <FeedBack/>
          <Blog/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App;