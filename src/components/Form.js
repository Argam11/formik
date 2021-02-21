import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./Form.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email").required("Required!"),
});

const Form = () => {
  const onSubmit = (v) => {
    console.log(v);
  };

  return (
    <div className="form">
      <Formik initialValues={{ name: "", email: "" }} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
            <ErrorMessage name="name" />
            <br />
            <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
            <ErrorMessage name="email" />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
