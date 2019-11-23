import React from 'react';
import { Button, Form, Grid, Header, Segment, Select } from 'semantic-ui-react';
import ImageUploader from 'react-images-upload';

export default class AdvancedSignUp extends React.Component {

    state = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        address: "",
        workPlace: "",
        title: "",
        image: ""
    };


    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    onDrop = (image) => {
        this.setState({ image })
    }

    handleSubmit = () => {

        console.log(this.state);
        // TODO: sand all the data to the server
        // get user id back
        //navigate to the users homepage
        // let id = 1;
        // this.props.history.push(`user/${id}`);
    }


    render() {

        const genderOptions = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
            { key: 'o', text: 'Other', value: 'other' },
        ]

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column stretched >
                    <Header as='h2' color='teal' textAlign='center'>
                        Additional info
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Group>
                                <Form.Input name="firstName" label="First Name" placeholder="First Name" onChange={this.handleChange} />
                                <Form.Input name="middleName" label="Middle Name" placeholder="Middle Name" onChange={this.handleChange} />
                                <Form.Input name="lastName" label="Last Name" placeholder="Last Name" onChange={this.handleChange} />
                                <Form.Input
                                    control={Select}
                                    options={genderOptions}
                                    fluid
                                    placeholder='Gender'
                                    name='gender'
                                    onChange={this.handleChange}
                                    label="Gender"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input name="email" label="Email" placeholder="Email" onChange={this.handleChange} />
                                <Form.Input name="address" label="Address" placeholder="Address" onChange={this.handleChange} />
                                <Form.Input name="workPlace" label="Work Place" placeholder="Work Place" onChange={this.handleChange} />
                                <Form.Input name="title" label="Title" placeholder="Title" onChange={this.handleChange} />
                            </Form.Group>
                            <ImageUploader
                                withIcon={false}
                                buttonText='Choose profile picture'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            />
                            <Button color='teal' size='large'>
                                Complete Registration
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )

    }
}