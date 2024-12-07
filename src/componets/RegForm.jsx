import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import "./Form.css";

function RegForm( {setNewObject} ) { 
  const [firstName, setFirstname] = useState("");
  const [firstNameError, setFirstnameError] = useState("");
  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const [newObject, setNewObject] = useState({});

  // handle validation
  const handleValidation = () => {
    // firstname validation
   if (firstName === "") {
    setFirstnameError("First name is required");
   } else if (firstName.length < 3) {
    setFirstnameError("First name must be at least 3 characters");
   } else {
    setFirstnameError("");
   }

   // lastname validation
   if (lastname === "") {
    setLastnameError("Last name is required");
   } else if (lastname.length < 3) {
    setLastnameError("Last name must be at least 3 characters");
   } else {
    setLastnameError("");
   }

   // email validation
   if (email === "") {
    setEmailError("Email is required");
   } else if (!email.includes("@")) {
    setEmailError("Email must include @");
   } else if(!email.includes(".com")) {
    setEmailError("Email must include .com");
     
   } else {
    setEmailError("");
   }

   // age validation
   if (age === "") {
    setAgeError("Age is required");
   } else if (age < 10) {
    setAgeError("User must be at least 10 years old");
   } else {
    setAgeError("");
   }

   // password validation
   if (password === "") {
    setPasswordError("Password is required");
   } else if (password.length < 6) {
    setPasswordError("Password must be at least 6 characters");
   } else {
    setPasswordError("");
   }

  
   
  };
   // handle clear form
   const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setAge("");
    setPassword("");
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();

    const userObj = {
      firstName: firstName,
      lastname: lastname,
      email: email,
      age: age,
    };

    
    setNewObject(userObj);
    
    clearForm();

 
   
  };

  return (
    <div className="container mt-5 form">
      <h1 className="text-center text-danger mb-3">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter firstname"
            value={firstName}

            onChange={(e) => setFirstname(e.target.value)}
          />
          { firstNameError && <p className="error"> { firstnameError} </p> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          {lastnameError && <p className="error">{lastnameError}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          
          />
          {ageError && <p className="error">{ageError}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           {passwordError && <p className="error">{passwordError}</p>}
        </Form.Group>

        <Button variant="danger" type="submit" className=" w-100 mt-2 mb-5">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegForm;
