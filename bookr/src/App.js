import React from 'react';
import logo from './logo.svg';
import BookList from './components/BookList.js';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login.js'
import {PrivateRoute} from './components/PrivateRoute.js'

function App() {
const clearIt = (event) =>{
  event.preventDefault();
  localStorage.clear();
  window.location.reload();
}

  return (
    <div className="App">
      <h1>BOOKR - Site Coming Soon ;)</h1>
      <button onClick={clearIt}>Logout</button>
     

      <Link to="/login">Login</Link>

      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/books" component={BookList}/>
    </div>
  );
}

export default App;
