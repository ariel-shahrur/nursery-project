import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {singUpValidationHandler} from './validationForSignUp'

import './login.css'
const expirationTimeInSeconds = 120; // 5 minutes

const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + expirationTimeInSeconds * 1000);





function Login(props:{setIsConncted:Function, isConnected: boolean}) {
  const [token, setToken] = useState(Cookies.get('token'));
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
      const [validation, setValidation] = useState({
        username: false,
        email: false,
        password:false,
        confirmPassword:false
      });
     


      const handleForChangeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });


        setValidation({
          ...validation,
          [event.target.name]:singUpValidationHandler(event.target.name,event.target.value,formData.password)
        })
      };


      const handleForChangeEventLogin = (event:React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
          ...loginData,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!formData.username || !formData.email || !formData.password || !formData.confirmPassword){
          console.log("you must provide all data");
          return;
        }
        if(!validation.username && !validation.email && !validation.password && !validation.confirmPassword){
          // Send the POST request
          fetch('http://127.0.0.1:3005/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .catch((error) => {
              // Handle errors
              console.error(error);
            });
            ((document.getElementsByName('username')[0]) as HTMLInputElement).value="";
            ((document.getElementsByName('email')[0]) as HTMLInputElement).value="";
            ((document.getElementsByName('password')[0]) as HTMLInputElement).value="";
            ((document.getElementsByName('confirmPassword')[0]) as HTMLInputElement).value="";
        }
        
      };
    
      const handleLogin = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch('http://127.0.0.1:3005/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.token) {
              // Cookies.set('token', data.token);
              document.cookie = `token= ${data.token}; max-age=${expirationTimeInSeconds}; expires=${expirationDate.toUTCString()}; path=/`;
              setToken(data.token);
              props.setIsConncted(true);
            }
            else {
              alert('wrong credentials');
            }
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
            
          });
      };


  return (
    <div>
    {(props.isConnected && <h1 id='h1LoginSucss'>loged in succses</h1>)||
      <div className='signUpDiv'>
      <div className='rightDiv'>

        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <h1>Sign Up</h1>
            <label  htmlFor="">User Name:
            <input type="text" placeholder='User Name' name='username' onChange={(e)=>{handleForChangeEvent(e)}} />
            {validation.username && <div className='validationDiv'>user name must be at least 8 charter</div>}
            </label>
            <label htmlFor="">Email:
            <input type="text" placeholder='example@gmail.com' name='email' onChange={(e)=>{handleForChangeEvent(e)}} />
            {validation.email && <div className='validationDiv'>exsample@gmail.com</div>}
            </label>
            <label htmlFor="">Password:
            <input type="text" placeholder='password' name='password'onChange={(e)=>{handleForChangeEvent(e)}} />
            {validation.password && <div className='validationDiv'>the password must inculde:
            <ul>
              <li>more than 8 charters and less than 30</li>
              <li>upperCase</li>
              <li>lowerCase</li>
              <li>numbers</li>
              <li>numbers</li>
              <li>specialChar</li>
            </ul></div>}
            </label>
            <label htmlFor="">Config Password:
            <input type="text" placeholder=" confirm you'r password" name='confirmPassword' onChange={(e)=>{handleForChangeEvent(e)}}/>
            {validation.confirmPassword && <div className='validationDiv'>the password not match</div>}
            </label>
            <button type = 'submit' className='subBtn'>submit</button>
        </form>
        </div>
        <div className='leftDiv'></div>


        <form onSubmit={(e)=>{handleLogin(e)}}>
        <h1>Log in</h1>
            <label  htmlFor="">User Name:
            <input type="text" placeholder='User Name' name='username' onChange={(e)=>{handleForChangeEventLogin(e)}} />
            </label>
            <label htmlFor="">Password:
            <input type="text" placeholder='password' name='password'onChange={(e)=>{handleForChangeEventLogin(e)}} />
            </label>
            <button type = 'submit' className='subBtn'>log in</button>
        </form>
    </div>}
    {props.isConnected && <div><button onClick={()=>{Cookies.remove('token'); props.setIsConncted(false);}}>log out</button></div> }
    </div>
  )
}

export default Login