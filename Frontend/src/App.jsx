import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import About from './pages/About'
import Counter from './component/Counter'
import Login from './Auth/Login'
import UseState from './pages/UseState'
import Hook from './pages/Hook'   

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home name="Nammu" />} />
        <Route path='/about' element={<About name="Nammu" age={20} dept="CS&DS" />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/useState' element={<UseState />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hook' element={<Hook />} />   {/* ✅ CLOSED */}
      </Routes>
    </>
  )
}

export default App