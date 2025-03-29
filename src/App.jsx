import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import MyList from './pages/MyList/MyList'
import { HOME,  MY_LIST } from './constans/path'

function App() {

  return (
   <div className='app'>
      <Navbar/>
      <Routes>  
        {/* Dinamiklik getirmek ve tek bir merkezi sağlamak için farklı yerde tuttuk pathleri  */}
        <Route path={HOME} element={<Home/>} /> 
        <Route path={MY_LIST} element={<MyList/>} />
      </Routes>
   </div>
  )
}

export default App
