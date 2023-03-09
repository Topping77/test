import Header from './components/Layout/header'
import './App.css'
import './components/Layout/header.css'
import Footer from './components/Layout/footer'
import ImgCard from './components/ImgCard'



function App() {
  return (
    <>
    <div className='header'>
     <Header/>     {/* src/Layout/Header에서 navbar를 불러옴 */}
    </div>
    

    <div>
      <ImgCard />
    </div>
    
  
   
    <Footer/>
    
    
    </>
  );
}

export default App;
