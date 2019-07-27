import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Input, Select } from 'semantic-ui-react';

export default class SignUp extends React.Component {


    state = {
        initialSinged: false,
        user: "",
        pass: "",
        confirmpass: ""
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleRegister = async () => {
        let res = await fetch("https://localhost:44318/api/Account/register", {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                UserName: this.state.user,
                Password: this.state.pass,
                ConfirmPassword: this.state.confirmpass
            })
        });

        if (res.ok) {
            // perform token and then move to the next page
            console.log(`Registered succenfully`);
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


    additionalData = () => {
        const genderOptions = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
            { key: 'o', text: 'Other', value: 'other' },
        ]

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Additional info
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                control={Select}
                                options={genderOptions}
                                fluid
                                placeholder='Gender'
                                name='gender'
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
            // <this.initialRegistration />
            <this.additionalData />
        );
    }



}