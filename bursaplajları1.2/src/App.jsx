import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeachList from './pages/BeachList';
import { Route, Routes } from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';


function App() {
  return (
<>
<Navbar/> 
<div className='container'> 
<div className='col-sm-12'>
  <Routes> 
<Route path='/' element={<Home/>}> </Route>
<Route path='/beachlist' element={<BeachList/>}> </Route>
<Route path='/karacabey' element={<PageOne/>}> </Route>
<Route path='/mudanya' element={<PageTwo/>}> </Route>
<Route path='/gemlik' element={<PageThree/>}> </Route>
<Route path='/orhangazi' element={<PageFour/>}> </Route>
<Route path='/iznik' element={<PageFive/>}> </Route>


  </Routes>
   </div>
</div>

</>
  );
}

export default App;