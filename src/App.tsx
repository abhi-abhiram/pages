import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { UserIn } from './categories/Users/SignIn';
import { UserSignUp } from './categories/Users/SignUp';
import { LawyerIn } from './categories/Lawyer/SignIn';
import { LawyerSignUp } from './categories/Lawyer/SignUp';
import { AdminIn } from './categories/Admin/SignIn';


function App() {
  return (
    <Router>
       <ul className='App-header'>
       <li>
        <Link to="/">Home</Link>
      </li>
       </ul>
      <Routes>
      <Route path='/' element={
      <ul className="App-header">
      
      <li className='li' >
        <Link  to="/user/signin">User SignIn</Link>
      </li>
      <li className='li' >
        <Link to="/lawyer/signin">Lawyer SignIn</Link>
      </li>
      <li className='li'>
        <Link to="/admin/signin">Admin SignIn</Link>
      </li>
    </ul>
      }></Route>
      <Route path='/user/signin' element={< UserIn />}></Route>
      <Route path='/user/signup' element={< UserSignUp />}></Route>
      <Route path='/lawyer/signup' element={< LawyerSignUp />}></Route>
      <Route path='/lawyer/signin' element={< LawyerIn />}></Route>
      <Route path='/admin/signin' element={< AdminIn />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
