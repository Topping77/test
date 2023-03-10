import Header from './components/Layout/header'
import './App.css'
import './components/Layout/header.css'
import Footer from './components/Layout/footer'
import ImgCard from './components/ImgCard'
import Main from './components/sidebar'



function App() {
  return (
    <>
    <div className='header'>
     <Header/>     {/* src/Layout/Header에서 navbar를 불러옴 */}
    </div>
    
    
    <Main />
      
      
      
  

    
  
    <Footer/>
    
    
    </>
  );
}

export default App;
