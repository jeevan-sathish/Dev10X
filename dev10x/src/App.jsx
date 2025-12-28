import React from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <div className='w-full h-[100vh] bg-black'>
    <Nav/>
    <Main/>
    <Footer/>
    
     </div>
  )
}

export default App ;