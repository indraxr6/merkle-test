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

     const login = async() => {
          try {
              if (username === usernameSample && password === passwordSample) {
                  window.location.href = "http://localhost:3000/home";
              } else {
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