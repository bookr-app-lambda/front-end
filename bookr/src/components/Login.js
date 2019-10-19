import React, { useState } from 'react';

import axios from 'axios';
import {Redirect} from 'react-router-dom';

// Form Component that lets user log in, takes a username and password

export default function Login(props) {
  //code goes here
  const [loginCredentials, setLoginCredentials] = useState({});

  const handleInputChange = event => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value
    });
  };

  

  const login = () => {
    axios.post('https://api-bookr.herokuapp.com/api/auth/login', loginCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.user.token);
        console.log(res);
        console.log(res.data.user);
        console.log(res.data.user.token);
        alert("logged in");
        props.history.push('/books');
      }).catch(err => console.log(err));
  };
  const handleSubmit = event => {
    event.preventDefault();
    login();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="email"
          id="email"
          value={loginCredentials.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={loginCredentials.password}
          onChange={handleInputChange}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
