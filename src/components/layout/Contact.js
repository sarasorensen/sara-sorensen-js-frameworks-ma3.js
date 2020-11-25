import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  userName: yup.string().required("User name is required"),
  password: yup
    .number()
    .required()
    .integer()
    .min(4, "Password must be greater than 4"),
});

function Contact() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="userName"
          placeholder="Enter your user name"
          ref={register}
        />
        {errors.userName && <p>{errors.userName.message}</p>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="number"
          name="password"
          placeholder="Enter your password"
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </Form.Group>

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Contact;
