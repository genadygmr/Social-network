import React from  'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user: "", pass: ""};
    }

    handleChange = (e, {name, value}) => this.setState({[name] : value});


    handleSubmit = () => {
        console.log(this.state.user, this.state.pass);
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
                  <Form.Input fluid icon='user' iconPosition='left' name='user' placeholder='E-mail address' onChange={this.handleChange}/>
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
                New user? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        )
    } 
}

