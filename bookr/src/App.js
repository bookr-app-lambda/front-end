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
  );
}

export default App;
