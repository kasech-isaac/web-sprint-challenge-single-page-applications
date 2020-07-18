import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

// **** yup js library ****
const fromSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup
      .string("optional"),
      pizza: yup.string().required("required"),
      size: yup.string().required("required"),
      sause1: yup.boolean().oneOf([true], "choice"),
      sause2: yup.boolean().oneOf([true], "choice"),
      sause3: yup.boolean().oneOf([true], "choice"),
      toping1: yup.boolean().oneOf([true], "choice"),
      toping2: yup.boolean().oneOf([true], "choice"),
      toping3: yup.boolean().oneOf([true], "choice")
  });

export default function Form() {

    const [foms, setFoms] = useState({
        name: "",
        phone: "",
        pizza: "",
        size:"",
        sause1:false,sause2:false,sause3:false,
        toping1: false,toping2: false,toping3: false
      });

      // **** error state ****
      const [errorState, setErrorState] = useState({
        name: "",
        phone: "",
        pizza: "",
        size:"",
        sause1:"",sause2:"",sause3:"",
        toping1: "",toping2: "",toping3: ""
      });
//  **** validate ****
      const validate = (e) => {
        let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup.reach(fromSchema, e.target.name)
        .validate(value)
        .then(valid =>{
          setErrorState({
            ...errorState,
            [e.target.name]:""
          })
        })
        .catch( err=>{
          console.log(err.errors)
          setErrorState({
            ...errorState,
            [e.target.name]:err.errors[0]
          })
        })
    
        }

   // **** onsubmit ****
   const thOnSubmit = e => {
    e.preventDefault();
    console.log(" submitted!");
    axios
    .post("https://reqres.in/api/users", foms)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  };
  
// **** onchange ****
  const theOnChange = e => {
    e.persist();
    if (e.target.name === "phone") {
        validate(e);
      }
      let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFoms({ ...foms, [e.target.name]: value });
  }; 

return(
    
   <form className="forms"onSubmit={thOnSubmit}>
  
<label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={foms.name}
          onChange={theOnChange}
        />
         {errorState.name.length > 0 ? <p className='error'>{errorState.name}</p> : null}
      </label>

      <label htmlFor="phone">
        Phone:
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone number"
          value={foms.phone}
          onChange={theOnChange}
        />
         {errorState.phone.length > 0 ? <p className='error'>{errorState.phone}</p> : null}
      </label>
  <label htmlFor="pizza">
      <h4 className="lable">Choice of Pizza</h4>
      required
  <select 
         name="pizza"
          id="pizza"
          onChange={theOnChange }
          >
          <option value="">--select--</option>
          <option value="Chicken">Chicken</option>
          <option value="New York style pizza">New York style pizza</option>
          <option value="Hawaiian Pizza">Hawaiian Pizza</option>    
         </select>
         {errorState.pizza.length > 0 ? <p className='error'>{errorState.pizza}</p> : null}
        </label>

        <label htmlFor="size">
        <h4 className="lable">choice of of size</h4>
      required
  <select 
         name="size"
          id="size"
        //   onChange={theOnChange }
          >
          <option value="">--select--</option>
          <option value="Larg">Larg</option>
          <option value="Small">Small</option>
          <option value="Middium">Middium</option>    
         </select>
         {errorState.size.length > 0 ? <p className='error'>{errorState.size}</p> : null}
        </label>
         
        <h4>choice of Sauce</h4>
         <label htmlFor="sause1">
        <input
          type="checkbox" id="sause1" name="sause1" checked={foms.sause1}   onChange={theOnChange}
        />
        Orginal Red
      </label>

      <label htmlFor="sause2">
        <input
          type="checkbox"id="sause2"name="sause2"   checked={foms.sause2}  onChange={theOnChange}
        />
       Garlic Ranch
      </label>

      <label htmlFor="sause3">
        <input
          type="checkbox"id="sause3" name="sause3"  checked={foms.sause3}    onChange={theOnChange}
        />
       BBQ Sauce
      </label>

      <h4>Add Toping</h4>
         <label htmlFor="toping1">
        <input
          type="checkbox"id="toping1" name="toping1"   checked={foms.toping1} onChange={theOnChange}
          />
        spinch
      </label>
<label htmlFor="toping2">
        <input
          type="checkbox" id="toping2"name="toping2"  checked={foms.toping2}  onChange={theOnChange}
        />
       Beef
      </label>

      <label htmlFor="toping3">
        <input
          type="checkbox"id="toping3"name="toping3"  checked={foms.toping3}  onChange={theOnChange}
        />
      Chicken
      </label>
 <label htmlFor="extra">
     <h4>Anything else Like to add?</h4>
      <textarea id="extra" name="extra"></textarea>
      </label>

<button>Place Your Order</button>

       </form>
)
     
    
  }
  
