import React from "react";
import { useFormik } from "formik";
import { UserSchema } from "../schemas/UserSchema";
function Form() {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: UserSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const handlesubmit = (e) => {
  //     e.preventDefault()
  //     const name = e.target.name.value
  //     const username = e.target.username.value
  //     const email = e.target.email.value
  //     const password = e.target.password.value

  //     console.log(name, username, email, password)
  //  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        
        <label htmlFor="name"> Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="username"> Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formik.values.usernam}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        ) : null}

        <label htmlFor="email"> Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password"> Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
