import React, { useState,useRef } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import JSON from "./country.json"
import STYLE from "./myform.module.css"


const Myform = () => {

  let [values, setData] = useState(JSON);
  const [countryid,setCountryId]=useState('');
  const [states,setState]=useState([]);
  const [state_id,setStateId]=useState('');

  function getCountry_id(e){
    const country_id=e.target.value;
    setCountryId(country_id)
    const getstates=JSON.find(country=>country.numeric_code===country_id).states
      setState(getstates)
  }

  function handlastate(e){
    const GetStateid=e.target.value;
    setStateId(GetStateid);
  }



let first_nameref=useRef("");
let last_nameref=useRef("");
let emailref=useRef("");
let zip_coderef=useRef("");
let formref=useRef("");
let mobileref=useRef("");
let address1ref=useRef("");
let success=(e)=>{
  var email_val=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 var Zip_val= /^[0-9]{3}(?: [0-9]{3})?$/;
  e.preventDefault()

  
  if(first_nameref.current.value===""){
    toast.error("Enter your first Name")
  }
  else if(first_nameref.current.value.length < 5){
        toast.error("FirstName Should have Minimum 5 letters")
  }

  else if(last_nameref.current.value===""){
    toast.error("Enter your Last name")
  }
  else if(last_nameref.current.value.length < 5){
    toast.error("LastName Should have Minimum 5 letters")
  }
  else if(emailref.current.value===""){
      toast.error("Enter your Email")
  }
   
  else if(!(emailref.current.value.match(email_val))){
     toast.error("ex(sample@123.com)")
  }
  else if(mobileref.current.value===""){
    toast.error("Mobile Number is Mandatory")
  }
  else if(mobileref.current.value.length < 10){
    toast.error("Number Should be 10 numbers")
  }
  else if(address1ref.current.value===""){
    toast.error("Address 1 is mandatory")
  }
  else if(zip_coderef.current.value===""){
    toast.error("ENTER ZIP CODE")
  }
  else if(!(zip_coderef.current.value.match(Zip_val))){
  toast.error("example(123 456)")
  }
  else{
    toast.success("Your Form Submitted Successfully")
  }
  
}





  return (
    <div id={STYLE.mainDIV}>
      
      <ToastContainer/>
      <form ref={formref} onSubmit={success}>
      <h1 className={STYLE.h1_Name}>SIGNUP FORM</h1>
        <table>

          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >FirstName</label>

            </td>
            <td>
              <input ref={first_nameref} className={STYLE.input_size} type="text" ></input>
            </td>
          </tr>


          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >LastName</label>
            </td>
            <td>
              <input ref={last_nameref} className={STYLE.input_size}  type="text"></input>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >Email</label>

            </td>

            <td>
              <input className={STYLE.input_size} ref={emailref}  type="text" ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >Mobile</label>
            </td>
            <td>
              <select className={STYLE.phno_size}>
                <option>+91</option>
                {values.map((t)=>{
                  return(
                    <option>{t.phone_code}</option>
                  )
                })}
              </select>
              <input ref={mobileref} className={STYLE.input_size} type="number"></input>
            </td>


          </tr>

          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >Address1</label>

            </td>

            <td>
              <textarea ref={address1ref}></textarea>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >Address2</label>

            </td>

            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >Country</label>
            </td>
            <td>
              <select className={STYLE.dropdown_size} onChange={(e)=>getCountry_id(e)}>
                <option>Select Your Country</option>
                {values.map((x)=>{
                  return (
                        <option value={x.numeric_code}>{x.name}</option>
                  )
                })}
              </select> 
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >State</label>
            </td>
            <td>
              <select className={STYLE.dropdown_size} onChange={(e)=>{handlastate(e)}} >
                <option>Select Your  state</option>
                {
                  states.map((s,index)=>{
                    return(
                      <option value={s.id} key={index}>{s.name}</option>
                    )
                  })
                }
              
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >City</label>
            </td>
            <td>
              <input className={STYLE.input_size} type="text"></input>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="" className={STYLE.label_size} >Zip Code</label>
            </td>
            <td>
              <input ref={zip_coderef} className={STYLE.input_size} type="text"></input>
            </td>
          </tr>
   
          <tr>
            <td>
              <button className={STYLE.button_size}  >Submit</button>
            </td>
            <td>
              <button className={STYLE.reset_button_size}>Reset</button>
            </td>

          </tr>
        </table>
      </form>
    </div>
  )
}

export default Myform;