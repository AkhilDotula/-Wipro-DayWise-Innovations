// Import all the functionality
import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

const RegistrationForm = ()=> {
     // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema:Yup.object({
        name: Yup.string().min(3, "At least 3 characters").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Required"),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    return(
        <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input type="text" {...formik.getFieldProps("name")} />
      </label>
      {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
      <label>
       Email:
        <input type="email" {...formik.getFieldProps("email")} />
      </label>
      {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
      <label>
        Password:
        <input type="password" {...formik.getFieldProps("password")} />
      </label>
      {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
      <label>
        Confirm Password:
        <input type="password" {...formik.getFieldProps("confirmPassword")} />
      </label>
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null}
      <button type="submit">Register</button>
    </form>
  );

  
};
export default RegistrationForm;