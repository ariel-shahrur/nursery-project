import React, { useState } from 'react'
import './contactUs.css'
import { validationCheck } from './validationCheck'

function ContactUs() {

  const [myFormData, setMyFormData] = useState({})
  const [isValid, setIsValid] = useState({ fullNameInpt: false, PhoneInpt: false, emailInpt: false });
  const [isEmpty, setIsEmpty] = useState({ fullNameInpt: true, PhoneInpt: true, emailInpt: true });

  let updateFromData = (e: React.FormEvent<HTMLInputElement>) => {
    let theElemId = (e.target as HTMLInputElement).getAttribute("id") as string;
    let thevalue = (e.target as HTMLInputElement).value;
    setMyFormData({ ...myFormData, [theElemId]: thevalue });

    validationCheck(theElemId, thevalue, isValid, setIsValid, isEmpty, setIsEmpty);


  }

  return (
    <div >
      <h1 id='contactUsHeaderH1'>Let's Start A Conversation</h1>
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


      <div id="rightDiv">
        <div className='formItemDiv'>
          <div>
            <label htmlFor="fullNameInpt" className='allLabel'>Full name</label>
            <input type="text" id='fullNameInpt' placeholder='Full Name' onInput={(e) => { updateFromData(e) }} />
          </div>
          {(!isValid.fullNameInpt && !isEmpty.fullNameInpt) && <div className='errorMsg'>not ok</div>}
        </div>

        <div className='formItemDiv'>
          <div>
            <label htmlFor="PhoneInpt" className='allLabel'>Phone number</label>
            <input type="text" id='PhoneInpt' placeholder='Phone Number' onInput={(e) => { updateFromData(e) }} />
          </div>
          {(!isValid.PhoneInpt && !isEmpty.PhoneInpt) && <div className='errorMsg'>not ok</div>}
        </div>

        <div className='formItemDiv'>
          <div>
            <label htmlFor="emailInpt" className='allLabel'>Email</label>
            <input type="text" id='emailInpt' placeholder='Email' onInput={(e) => { updateFromData(e) }} />
          </div>
          {(!isValid.emailInpt && !isEmpty.emailInpt) && <div className='errorMsg'>not ok</div>}
        </div>

        <div className='formItemDiv'>
          <div>
            <label htmlFor="noteInpt" className='allLabel'>Note</label>
            <input type="text" id='noteInpt' placeholder='Note' onInput={(e) => { updateFromData(e) }} />
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ContactUs