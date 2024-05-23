
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Books from './components/Books/Books';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
    
        <Route path='/home' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
   <Footer/>
    </BrowserRouter>
  )
}

export default App
