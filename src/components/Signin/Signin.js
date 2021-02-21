import React from "react";
import { useFormik } from "formik";
import { TextField, Checkbox, Button } from "@material-ui/core";
import "./Signin.scss";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="signin">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <TextField
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
        </div>
        <div className="form-control-checkbox">
          <Checkbox id="rememberMe" color="primary" checked={formik.values.rememberMe} onChange={formik.handleChange} />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <Button disabled={!formik.isValid || !formik.dirty} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signin;
