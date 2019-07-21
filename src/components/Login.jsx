import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import {Router,Route,withRouter} from 'react-router';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: "", pass: "" };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });


  handleSubmit = async () => {
    let urlSeachParams = new URLSearchParams();
    urlSeachParams.set("username", this.state.user);
    urlSeachParams.set("password", this.state.pass);
    urlSeachParams.set("grant_type", "password");


    let res = await fetch("https://localhost:44318/token", {
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      method: "POST",
      body: urlSeachParams

    });
    if (res.ok) {
      res = await res.json();
      localStorage.setItem("token", res.access_token);

      await this.goToPersonalPage();
    } else { console.error("Could not get authorization token"); }
  }

  goToPersonalPage = async () => {
    // load all user data for his page
    // hadle here the moving to the personal pages after the login
    this.props.history.push('/user/23');
  }


  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
              </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' name='user' placeholder='E-mail address' onChange={this.handleChange} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='pass'
                onChange={this.handleChange}
              />

              <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                Login
                  </Button>
            </Segment>
          </Form>
          <Message>
            New user? <a href='/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(Login);