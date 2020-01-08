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

    const jsonBody = {
      UserName: this.state.user,
      PassWord: this.state.pass
    };
    let res = await fetch("https://localhost:5001/api/login", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(jsonBody)
    });
    if (res.ok) {
      res = await res.json();
      localStorage.setItem("username", this.state.user);
      localStorage.setItem("id", res.id)

      await this.goToPersonalPage(res.Id);
    } else { console.error("Could not get authorization token"); }
  }

  goToPersonalPage = async (id) => {
    // load all user data for his page
    // hadle here the moving to the personal pages after the login
    this.props.history.push({
      pathname: 'user/homepage',
      state: {id}
    });
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