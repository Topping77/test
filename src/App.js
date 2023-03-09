import Header from './components/Layout/header'
import './App.css'
import './components/Layout/header.css'
import Updown from './components/updown'
import Footer from './components/Layout/footer'
import ImgCard from './components/ImgCard'



function App() {
  return (
    <>
    <div className='header'>
    <Header/>
     
    </div>
    

    <div>
      <ImgCard />
    </div>
    
  
   
    <Footer/>
    
    
    </>
  );
}

export default App;
