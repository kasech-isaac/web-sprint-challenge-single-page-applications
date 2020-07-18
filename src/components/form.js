import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

// **** yup js library ****
const fromSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Must be valide email adress")
      .required("Email is required"),
      Password: yup.string().required("required"),
      edication: yup.string().required("required"),
    term: yup.boolean().oneOf([true], "please agree to term and condition")
  });

export default function form() {

    const [foms, setFoms] = useState({
        name: "",
        email: "",
        password: "",
        edication:"",
        term: false
      });
   // **** onsubmit ****
   const thOnSubmit = e => {
    e.preventDefault();
   
    axios
    .post("https://reqres.in/api/users", foms)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  };
  
// **** onchange ****
  const theOnChange = e => {
    e.persist();
    if (e.target.name === "email") {
        validate(e);
      }
      let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFoms({ ...foms, [e.target.name]: value });
  }; 

return(
    
   <form className="form">

<label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        //   value={foms.name}
        //   onChange={theOnChange}
        />
         {/* {errorState.name.length > 0 ? <p className='error'>{errorState.name}</p> : null} */}
      </label>

      <label htmlFor="phone">
        Phone:
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone number"
        //   value={foms.name}
        //   onChange={theOnChange}
        />
         {/* {errorState.name.length > 0 ? <p className='error'>{errorState.name}</p> : null} */}
      </label>
  <label htmlFor="pizza">
      <h4>Choice of Pizza</h4>
      required
  <select 
         name="pizza"
          id="pizza"
        //   onChange={theOnChange }
          >
          <option value="">--select--</option>
          <option value="Chicken">Chicken</option>
          <option value="New York style pizza">New York style pizza</option>
          <option value="Hawaiian Pizza">Hawaiian Pizza</option>    
         </select>
        </label>

        <label htmlFor="pizza">
      <h4>Pizza Size</h4>
      required
  <select 
         name="pizza"
          id="pizza"
        //   onChange={theOnChange }
          >
          <option value="">--select--</option>
          <option value="Larg">Larg</option>
          <option value="Small">Small</option>
          <option value="Middium">Middium</option>    
         </select>
        </label>
         
        <h2>choice of of size</h2>
         <label htmlFor="term">
        <input
          type="checkbox"
          id="term"
          name="term"
        //   checked={foms.term}
        //   onChange={theOnChange}
        />
        Orginal Red
      </label>

      <label htmlFor="term">
        <input
          type="checkbox"
          id="term"
          name="term"
        //   checked={foms.term}
        //   onChange={theOnChange}
        />
       Garlic Ranch
      </label>

      <label htmlFor="term">
        <input
          type="checkbox"
          id="term"
          name="term"
        //   checked={foms.term}
        //   onChange={theOnChange}
        />
       BBQ Sauce
      </label>

      <h2>Add Toping</h2>
         <label htmlFor="term">
        <input
          type="checkbox"
          id="term"
          name="term"
        //   checked={foms.term}
        //   onChange={theOnChange}
        />
        Orginal Red
      </label>

      <label htmlFor="term">
        <input
          type="checkbox"
          id="term"
          name="term"
        //   checked={foms.term}
        //   onChange={theOnChange}
        />
       Garlic Ranch
      </label>

      <label htmlFor="term">
        <input
          type="checkbox"
          id="term"
          name="term"
        //   checked={foms.term}
        //   onChange={theOnChange}
        />
       BBQ Sauce
      </label>
      <label htmlFor="extra">
     Anything else Like to add?
      <textarea id="extra" name="extra"></textarea>
      </label>



<button type="submit">Submit</button>
       </form>
)
     
    
  }
  
