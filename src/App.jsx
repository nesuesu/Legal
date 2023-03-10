import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import Home from './components/pages/Home';
import Flowers from './components/pages/Flowers';
import Users from './components/pages/Users';
import Message from './components/pages/Message';
import Login from './components/pages/Login';
import Register from './components/pages/Register';


function App() {
  return (
    <>
    <div id="page-container">
      <div id="content-wrap">
      <Header />
      <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/flowers' element={<Flowers />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/message' element={<Message />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/*' element={<h1>404 Page not Found</h1>}></Route>
          </Routes>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
