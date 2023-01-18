import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import Headers from '../components/Header/Header';
import Swal from 'sweetalert2';

function Login() {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const usernameSample = "testing"
     const passwordSample = "testing"

     const handleChange = (prop) => (e) => {
          if (prop === "username") {
               setUsername(e.target.value);
          }

          if (prop === "password") {
               setPassword(e.target.value);
          }
     }

     const login = async(username, password) => {
          try {
              const response = await fetch('https://fakestoreapi.com/users');
              if(!response.ok) throw new Error('Failed to fetch users.');
              const json = await response.json();
              const user = json.find(user => user.username === usernameSample && user.password === passwordSample);
              if (user) {
                  // Login successful, redirect to localhost:3000/home
                  window.location.href = "http://localhost:3000/home";
              } else {
                  // Show an error message using sweetalert2
                  Swal.fire({
                      title: 'Error!',
                      text: 'Incorrect username or password.',
                      icon: 'error',
                      confirmButtonText: 'Try again'
                  });
              }
          } catch(err) {
              Swal.fire({
                  title: 'Error!',
                  text: err.message,
                  icon: 'error',
                  confirmButtonText: 'Try again'
              });
          }
      }

     return (
          <>
               <Headers />
               <LoginForm
                    handleChange={handleChange}
                    username={username}
                    password={password}
                    error={error}
                    login={login}
               />

          </>
     );


}
export default Login;