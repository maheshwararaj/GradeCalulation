import React from 'react'
import Navbar from './Navbar'
import './App.jsx'
import Calculate from './Calculate'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar/>
      <Calculate/>
    </div>
  )
}

export default App