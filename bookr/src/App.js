import React from 'react';
import logo from './logo.svg';
import BookList from './components/BookList.js';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login.js';

function App() {
  return (
    <div className="App">
      <h1>BOOKR - Site Coming Soon ;)</h1>
      
      <BookList />

      <Link to="/login">Login</Link>

      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
