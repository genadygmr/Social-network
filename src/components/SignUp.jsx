import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Input, Select } from 'semantic-ui-react';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props)
    }


    state = {
        initialSinged: false,
        user: "",
        pass: "",
        confirmpass: ""
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleRegister = async () => {

        console.log({
            UserName: this.state.user,
            PassWord: this.state.pass,
            ConfirmPassword: this.state.confirmpass
        });
        let res = await fetch("https://localhost:5001/api/users/register", {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                UserName: this.state.user,
                PassWord: this.state.pass,
                ConfirmPassword: this.state.confirmpass
            })
        });

        console.log(res)

        if (res.ok) {
            let body = await res.json();
            console.log(body)      
            // perform token and then move to the next page
            console.log(`Registered succenfully`);
            this.props.history.push({
                pathname: `user/${body.id}/additional-info`,
                state: {id: body.id}
            });
        } else {
            // TODO: provide a better error message corresponding to the response from the server
            alert("There was error signing up")
        }

    }


    initialRegistration = () => {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Register
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
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Retpe password'
                                type='password'
                                name='confirmpass'
                                onChange={this.handleChange}
                            />

                            <Button color='teal' fluid size='large' onClick={this.handleRegister}>
                                Sign up
                  </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }

    render() {
        return (
            <this.initialRegistration />
        );
    }



}