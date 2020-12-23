import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


const SignupForm = ({registerUser}) => {
  return (
    <>
      <h1>Register New User</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          npiNum: "",
          email: "",
          address: "",
          phoneNum: "",

        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          npiNum: Yup.string()
            .min(10, "Must be 10 digits long")
            .max(10, "Must be 10 digits long")
            .matches(/^[0-9]+$/, "Must be only digits")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          address: Yup.string()
            .required("Business Address Required"),
          phoneNum: Yup.string()
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Digits only"
            )
            .required("Phone number required"),
        })}
        onSubmit={(values, FormikBag) => {
          registerUser(values)
          FormikBag.resetForm({})
          
        }}
      >
        <Form>
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <FormInput
            label="NPI Number"
            name="npiNum"
            type="text"
            placeholder="1234567891"
          />
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="darth@deathstar.com"
          />
          <FormInput
            label="Busniess Address"
            name="address"
            type="text"
            placeholder="123 DeathStar Ln"
          />
          <FormInput
            label="Phone Number"
            name="phoneNum"
            type="text"
            placeholder="214-555-5555"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
