import React, {useState} from 'react'
import uuid from 'react-uuid';
import ApiCustomerClient from "../api/ApiCustomerClient";

const validMinValue = (value, minLength=2) => {
    return value.length < minLength ? false : true;
}
const validEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (!regEx.test(value)) ? false : true;
}
const validPostalCode = (value, RequiredLength=5) => {
    return value.length === RequiredLength ? true : false;
}
const checkValidForm = (elements) => {
    let disable = false
    let errors = document.querySelectorAll('.is-invalid')
    let submitButton = document.querySelectorAll('.submit')[0]

    elements.forEach(element => {
        if(element.value === "" || errors.length > 0)
            disable = true
    })

    if(submitButton !== undefined)
        submitButton.disabled = disable
  
}


var forms = document.querySelectorAll('.needs-validation')

export const CreateCustomer = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const firstNameHandler = (e) => { 
        validateMinLength(e)
        setFirstName(e.target.value) 
    }
    const lastNameHandler = (e) => { 
        validateMinLength(e)
        setLastName(e.target.value) 
    }
    const emailHandler = (e) => { 
        validateEmail(e)
        setEmail(e.target.value) 
    }
    const addressHandler = (e) => { 
        validateMinLength(e)
        setAddress(e.target.value) 
    }
    const postalCodeHandler = (e) => { 
        validatePostalCode(e);
        setPostalCode(e.target.value) 
    }

    const submitHandler = (e) => {
        e.preventDefault()
      
        const customer = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            address : address,
            postalCode : postalCode
        }
        ApiCustomerClient.saveCustomer(customer).then(res=>alert("Registration successful")).catch(err=>console.log(err))
        
        setFirstName('')
        setLastName('')
        setEmail('');
        setAddress('');
        setPostalCode('');
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="col-12 col-md-6">
                <form className='col-6' onSubmit={submitHandler} novalidate>
                    <div className="form-floating mb-5"><h3>Registration</h3></div>

                    <div className="form-floating mb-3">
                        <input id="firstName" type="text" className="form-control needs-validation" placeholder="firstname" onChange={firstNameHandler}/>
                        <label htmlFor="firstName">First Name</label>
                        <div id="firstName-error" className="invalid-feedback"><small>You must enter a valid first name </small></div>
                    </div>
                    <div className="form-floating mb-3">
                        <input id="lastName" type="text" className="form-control needs-validation" placeholder="lastname" onChange={lastNameHandler}/>
                        <label htmlFor="lastName">Last Name</label>
                        <div id="lastName-error" className="invalid-feedback"><small>You must enter a valid lastName</small></div>
                    </div>
                    <div className="form-floating mb-3">
                        <input id="email" type="email" className="form-control needs-validation" placeholder="name@example.com" onChange={emailHandler}/>
                        <label htmlFor="email">Email</label>
                        <div id="email-error" className="invalid-feedback"><small>You must enter a valid email address</small></div>
                    </div>
                    <div className="form-floating mb-3">
                        <input id="address" type="text" className="form-control needs-validation" placeholder="address" onChange={addressHandler}/>
                        <label htmlFor="address">Address</label>
                        <div id="address-error" className="invalid-feedback"><small>You must enter a valid address</small></div>
                    </div>
                    <div className="form-floating mb-3">
                        <input id="postalCode" type="text" className="form-control needs-validation" placeholder="postalCode" onChange={postalCodeHandler}/>
                        <label htmlFor="postalCode">PostalCode</label>
                        <div id="postalCode-error" className="invalid-feedback"><small>You must enter a valid postal code</small></div>
                    </div>
                    <div className="d-grid">
                        <button id="regForm-submit" className="submit mt-4 btn btn-secondary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
const validateMinLength = (e)=> {
    if (!validMinValue(e.target.value)) {
        e.target.classList.add("is-invalid");
        document.getElementById(`${e.target.id}-error`).style.display = "block";
        checkValidForm(forms);
    } else {
        e.target.classList.remove("is-invalid");
        document.getElementById(`${e.target.id}-error`).style.display = "none";
        checkValidForm(forms);
    }
}

const validateEmail = (e) => {
    if (!validEmail(e.target.value)) {
        e.target.classList.add("is-invalid");
        document.getElementById(`${e.target.id}-error`).style.display = "block";
        checkValidForm(forms);
    } else {
        e.target.classList.remove("is-invalid");
        document.getElementById(`${e.target.id}-error`).style.display = "none";
        checkValidForm(forms);
    }
}

const validatePostalCode = (e) => {
    if (!validPostalCode(e.target.value)) {
        e.target.classList.add("is-invalid");
        document.getElementById(`${e.target.id}-error`).style.display = "block";
        checkValidForm(forms);
    } else {
        e.target.classList.remove("is-invalid");
        document.getElementById(`${e.target.id}-error`).style.display = "none";
        checkValidForm(forms);
    }
}

