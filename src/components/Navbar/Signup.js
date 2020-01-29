import React from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

class Users extends React.Component {
  render() {
    return (
      <div
        className="body"
        style={{
          height: "100px",
          width: "300px",
          marginLeft: "50px",
          marginTop: "30px"
        }}
      >
        <Form className="signin" method='post' action='http://localhost:3000/register'>
          <div style={{ fontWeight: "bold", fontSize: 32, marginLeft: 50 }}>
            SignUp Form
          </div>
          <FormGroup bsSize="large" style={{ marginTop: 10 }}>
            <Label>Name</Label>
            <Input name='username' type="Name" placeholder="FullName" required/>
          </FormGroup>
          <FormGroup bsSize="large">
            <Label>Email</Label>
            <Input name='name' type="username" placeholder="you@gmail.com"/>
          </FormGroup>
          
          <FormGroup>
            <Label>password</Label>
            <Input name='password' type="password" placeholder="password" required/>
          </FormGroup>
         
          <Button className="btn-lg btn-dark btn-block">
            Login</Button>
  
        </Form>
        <div style={{ marginTop: 20 }}>
          if you have an account ?
          <Link to="Signin/">
               signIn
          </Link>
        </div>
      </div>
    );
  }
}

export default Users;
