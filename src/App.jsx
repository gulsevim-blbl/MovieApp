import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import MyList from './pages/MyList/MyList'
import { HOME,  MOVİE_DETAIL,  MY_LIST } from './constans/path'
import MovieDetail from './pages/MovieDetail/MovieDetail'

function App() {

  return (
   <div className='App'>
      <Navbar/>
      <Routes>  
        {/* Dinamiklik getirmek ve tek bir merkezi sağlamak için farklı yerde tuttuk pathleri */}
        <Route path={HOME} element={<Home/>} /> 
        <Route path={MY_LIST} element={<MyList/>} />
        <Route path={MOVİE_DETAIL} element={<MovieDetail/>}/>
      </Routes>
   </div>
  )
}

export default App
