import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

export default function Header() {
  //code goes here
  return (
    <header>
      <h1>BOOKR: Book reviews and more</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </header>
  );
}
