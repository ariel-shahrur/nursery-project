import { useState } from 'react';
import './login.css'

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password:'',
        configpassword:''
      });
      const handleForChangeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
        console.log(formData);
        
      };

      const handleSubmit = (event:React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
      
        // Send the POST request
        fetch('http://127.0.0.1:3001/postExempal', {
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
    
  return (
    <div>
        <form action="http://127.0.0.1:3001/postExempal" method='post'>
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
            <input type="text" placeholder=" config you'r password" name='configpassword' onChange={(e)=>{handleForChangeEvent(e)}}/>
            </label>
            <button type = 'submit' onSubmit={(e)=>{handleSubmit(e)}}>submit</button>
        </form>
    </div>
  )
}

export default Login