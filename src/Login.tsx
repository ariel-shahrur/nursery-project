import { useState } from 'react';
import Cookies from 'js-cookie';

import './login.css'

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password:'',
        confirmPassword:''
      });
      const [loginData, setLoginData] = useState({
        username: '',
        password:''
      });


      const handleForChangeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
        console.log(formData);
      };
      const handleForChangeEventLogin = (event:React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
          ...loginData,
          [event.target.name]: event.target.value,
        });
        console.log(loginData);
      };

      const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Send the POST request
        fetch('http://127.0.0.1:3005/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response data
            // console.log(data);
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          });
      };
    
      const handleLogin = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Send the POST request
        fetch('http://127.0.0.1:3005/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        })
          .then((response) => response.json())
          .then((data) => {
            Cookies.set('token', data.token);
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          });
      };
  return (
    <div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <label  htmlFor="">User Name:
            <input type="text" placeholder='User Name' name='username' onChange={(e)=>{handleForChangeEvent(e)}} />
            </label>
            <label htmlFor="">Email:
            <input type="text" placeholder='example@gmail.com' name='email' onChange={(e)=>{handleForChangeEvent(e)}} />
            </label>
            <label htmlFor="">Password:
            <input type="text" placeholder='password' name='password'onChange={(e)=>{handleForChangeEvent(e)}} />
            </label>
            <label htmlFor="">Config Password:
            <input type="text" placeholder=" config you'r password" name='confirmPassword' onChange={(e)=>{handleForChangeEvent(e)}}/>
            </label>
            <button type = 'submit'>submit</button>
        </form>

        <form onSubmit={(e)=>{handleLogin(e)}}>
            <label  htmlFor="">User Name:
            <input type="text" placeholder='User Name' name='username' onChange={(e)=>{handleForChangeEventLogin(e)}} />
            </label>
            <label htmlFor="">Password:
            <input type="text" placeholder='password' name='password'onChange={(e)=>{handleForChangeEventLogin(e)}} />
            </label>
            <button type = 'submit'>log in</button>
        </form>
    </div>
  )
}

export default Login