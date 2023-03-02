import logo from './logo.svg';
import './App.css';
import Admin from './Components/Pages/Admin/Admin';
import Categories from './Components/Pages/Categories/Categories';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import PrivateRouter from './Components/PrivateRouter';
import { useState } from 'react';

function App() {
  const [auth,setAuth] = useState(false)

  const Login = ()=>{
    console.log('in the login function')
    setAuth(!auth)
  }

  return (
    <BrowserRouter>
    <NavBar Login={Login} auth={auth}  />
    <Routes>
      <Route path='/admin' element={<PrivateRouter isauth={auth}><Admin/></PrivateRouter> } />
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<PrivateRouter isauth={auth}><Products/></PrivateRouter> }/>

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
