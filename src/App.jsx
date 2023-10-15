
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
function App() {


  return (
    <>  
      <Header></Header>
      <Outlet> </Outlet>
      <Toaster/>
    </>
  )
}

export default App
