import React from 'react'
import SignupForm from './SignupForm';

export default function Register() {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    npiNum: "",
    email: "",
    address: "",
    phoneNum: "",
  });


  const registerUser = (values) => {
    console.log('regster',values);
    setUser({
      firstName: values.firstName,
      lastName: values.lastName,
      npiNum: values.npiNum,
      email: values.email,
      address: values.address,
      phoneNum: values.phoneNum,
    });
  }

  const logOut = () => {
    console.log("logOut");
    setUser({ firstName: ""});
};
  return (
    <>
      { user.firstName !== "" ? (<div>
        <h1>Welcome, <span>{user.firstName}</span></h1>
        <br />
        <h2>Last Name: {user.lastName}</h2>
        <h2>NPI number: {user.npiNum}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Business Address: {user.address}</h2>
        <h2>Telephone number: {user.phoneNum}</h2>
        <button onClick={logOut}>Log Out</button>
      </div>
      
      )
      : (<SignupForm registerUser={registerUser} />
      )}
    </>
  )
}
