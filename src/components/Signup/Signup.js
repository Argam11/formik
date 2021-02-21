import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@material-ui/core";
import ErrorText from "../ErrorText/ErrorText";
import * as Yup from "yup";
import "./Signup.scss";

const validationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
  gender: Yup.string().required("Required"),
  select: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const Signup = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="signup">
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          gender: "",
          select: "red",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field className="text-field" name="email" placeholder="Email" />
                <ErrorMessage name="email">
                  {(msg) => <ErrorText msg={msg} />}
                </ErrorMessage>
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <Field
                  className="text-field"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password">
                  {(msg) => <ErrorText msg={msg} />}
                </ErrorMessage>
              </div>
              <div className="form-control">
                <label htmlFor="confirmPassword">Confirm password</label>
                <Field
                  className="text-field"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <ErrorText msg={msg} />}
                </ErrorMessage>
              </div>
              <div className="form-control-radio">
                <div>
                  <label htmlFor="male">Male</label>
                  <Field
                    id="male"
                    className="text-field"
                    type="radio"
                    name="gender"
                    value="one"
                  />
                </div>
                <div>
                  <label htmlFor="female">Female</label>
                  <Field
                    id="female"
                    className="text-field"
                    type="radio"
                    name="gender"
                    value="two"
                  />
                </div>
                <ErrorMessage name="gender">
                  {(msg) => <ErrorText msg={msg} />}
                </ErrorMessage>
              </div>
              <div className="form-control">
                <label htmlFor="select">Select</label>
                <Field as="select" className="text-field" name="select">
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
                <ErrorMessage name="select">
                  {(msg) => <ErrorText msg={msg} />}
                </ErrorMessage>
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <Field as="textarea" className="text-field" name="description" />
                <ErrorMessage name="description">
                  {(msg) => <ErrorText msg={msg} />}
                </ErrorMessage>
              </div>
              <Button
                disabled={!formik.isValid || !formik.dirty}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Signup;
