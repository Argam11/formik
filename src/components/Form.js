import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./Form.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email").required("Required!"),
  ["obj.a"]: Yup.string().required("Required 55"),
});

const Form = () => {
  const onSubmit = (v) => {
    console.log(v, 33);
  };

  return (
    <div className="form">
      <Formik initialValues={{ name: "", email: "", "obj.a": "" }} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
              <ErrorMessage name="name" />
            </div>
            <div className="form-control">
              <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
              <ErrorMessage name="email" />
            </div>
            <div className="form-control">
              {console.log(formik.errors)}
              <input type="text" name="['obj.a']" value={formik.values["obj.a"]} onChange={formik.handleChange} />
              <ErrorMessage name="['obj.a']" />
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
