import React from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

class Users extends React.Component {
  render() {
    return (
      <div
        className="body"
        style={{
          height: "100px",
          width: "300px",
          marginLeft: "500px",
          marginTop: "30px"
        }}
      >
        <Form className="signin">
          <div style={{ fontWeight: "bold", fontSize: 32, marginLeft: 50 }}>
            SignUp Form
          </div>
          <FormGroup bsSize="large" style={{ marginTop: 10 }}>
            <Label>Name</Label>
            <Input type="Name" placeholder="FullName" />
          </FormGroup>
          <FormGroup bsSize="large">
            <Label>Email</Label>
            <Input type="email" placeholder="you@gmail.com" />
          </FormGroup>
          <FormGroup bsSize="large">
            <Label>Mobile number</Label>

            <Input type="mobilenumber" placeholder="mobilenumber" />
          </FormGroup>
          <FormGroup>
            <Label>password</Label>
            <Input type="password" placeholder="password" />
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block">Login</Button>
        </Form>
        <div style={{ marginTop: 20 }}>
          if you have an account ?
          <Link to="/Signin">
            <a href="a"> signIn</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Users;
