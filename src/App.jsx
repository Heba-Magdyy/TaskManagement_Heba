import Dash from './pages/Dashboard'
import Layout from './layout/Layout'
import { Route, HashRouter, Routes } from 'react-router-dom'
import Settings from './pages/Settings'
import Landing from './pages/Landing'

function App() {


  return (
    <HashRouter>
    <Routes>

    <Route index element={<Landing/>}></Route>      

      <Route path="/" element={<Layout/>}>
        <Route path='/dashboard' element={<Dash/>} />     
        <Route path="/settings" element={<Settings/>}/>  
      </Route>
    </Routes>
   </HashRouter>
  )
}

export default App
