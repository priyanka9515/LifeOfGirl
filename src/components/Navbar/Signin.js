import React from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div
        className="body"
        style={{
          height: "100px",
          width: "300px",
          marginLeft: "500px",
          marginTop: "40px"
        }}
      >
        <Form className="signin" method='post' action='http://localhost:3000/login'>
          <div style={{ fontWeight: "bold", fontSize: 32, marginLeft: 50 }}>
            SignIn Form
          </div>
          <FormGroup style={{ marginTop: 10 }}>
            <Label>Email/UserName</Label>
            <Input name='username' type="name" placeholder="you@gmail.com"  />
          </FormGroup>
          <FormGroup>
            <Label>password</Label>
            <Input name='password' type="password" placeholder="password" required/>
          </FormGroup>
         
          <Button
            className="btn-lg btn-dark btn-block"
            style={{ backgroundColor: "black", color: "white" }}
          >
Login
          </Button>
          
        </Form>
        <div style={{ marginTop: 20 }}>
          if don't have an account ?
          <Link to="/Signup">
                 signUp
          </Link>
        </div>
      </div>
    );
  }
}

export default Contact;
