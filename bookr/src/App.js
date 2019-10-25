<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import BookList from "./components/BookList.js";
import Login from "./components/Login.js";
import RegistrationForm from "./components/RegistrationForm.js";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Header />
      <Route exact path="/" component={BookList} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={RegistrationForm} />
    </main>
=======
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import Description from './components/Description/Description';
import Login from './components/Login/Login';
import BookList from './components/BookList/BookList';
import SignUp from './components/SignUp/SignUp';
import Book from './components/Book/Book';
import Favorite from './components/Favorite/Favorite';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App container'>
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/booklist' component={BookList} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Login} />

        <Route path='/book/:id' component={Description} />
        <Route path='/favorite' component={Favorite} />
      </div>
    </Router>
>>>>>>> fa5b48ec82722f28f272f23684dc53bf414efdce
  );
}

export default App;
