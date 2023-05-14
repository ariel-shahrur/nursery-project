import React, { useState } from 'react'
import './contactUs.css'

function ContactUs() {

  const [myFormData,setMyFormData]=useState({})
  
  let updateFromData = (e:React.FormEvent<HTMLInputElement>)=>{
    let theElemId=(e.target as HTMLInputElement).getAttribute("id") as string;
  let thevalue=(e.target as HTMLInputElement).value;
      setMyFormData({...myFormData,[theElemId]:thevalue});
  }

  return (
    <div id='contactUsDiv'>
    <div id="leftDiv">
      <div className="leftDivItem">
        <h5>Visit Us:</h5>
        <p>Tibrias Garden<br />
        Write in WAZE: Nursery - Tiberias Garden.
        </p>
      </div>
      <hr />
      <div className="leftDivItem">
      <h5>Opening Hours:</h5>
        <p>Weekdays: 8:00-18:00<br />
        Fridays and holiday eves 8:00-14:00
        </p>
      </div>
      <hr />
      <div className="leftDivItem">
      <h5>Email:</h5>
        <p>tiberiasGarden@gmail.co.il
        </p>
      </div>
      <hr />
      <div className="leftDivItem">
      <h5>Phone number:</h5>
        <p>050-7766289
        </p>
      </div>
    </div>

    {/* onInput={(e)=>{updateFromData}} */}

    <div id="rightDiv">
      <label htmlFor="" className='allLabel'>Full name</label>
      <input type="text" id='fullNameInpt' placeholder='Full Name' onInput={(e)=>{updateFromData(e)}} />

      <label htmlFor="" className='allLabel'>Phone number</label>
      <input type="text" id='PhoneInpt' placeholder='Phone Number'  />

      <label htmlFor="" className='allLabel'>Email</label>
      <input type="text" id='emailInpt' placeholder='Email'  />

      <label htmlFor="" className='allLabel'>Note</label>
      <input type="text" id='noteInpt' placeholder='Note' />
    </div>
  </div>
  )
}

export default ContactUs