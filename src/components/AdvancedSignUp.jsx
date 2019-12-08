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
        image: "",
        id: this.props.location.state.id,
        gender: ""
    };


    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    onDrop = (image) => {
        this.setState({ image: image[0] })
    }

    handleSubmit = async () => {

        const dataToSend = {
            UserId: this.state.id,
            FirstName: this.state.firstName,
            MiddleName: this.state.middleName,
            LastName: this.state.lastName,
            Email: this.state.email,
            ImageFile: this.state.image,
            Image: this.state.image,
            Gender: this.state.gender,
            WorkPlalace: this.state.workPlace,
            Title: this.state.title
        }
        let form = new FormData();
        for (let key in dataToSend) {
            form.append(key, dataToSend[key])
        }
        let res = await fetch('https://localhost:5001/api/users/addusersdata', {
            method: "POST",
            body: form
        })
        if(res.ok) {
            console.log(this.state);
            this.props.history.push({
                pathname: `user/${this.state.id}/homepage`,
                state: { id: this.state.id }
            });
        } else { alert("failed"); }
        

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