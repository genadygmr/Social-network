import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Input, Select } from 'semantic-ui-react';
import ImageUploader from 'react-images-upload';

export default class AdvancedSignUo extends React.Component {

    state = {
        image: "",
        genaer: "",
        firstName: "",
        middleName: "",
        lastName: "",
        address: "",
        workPlace: "",
        title: ""
    };


    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    onDrop = (image) => {
        this.setState({ image })
    }

    comlete = () => {
        // TODO: sand all the data to the server
        // get user id back
        //navigate to the users homepage
        let id = 1;
        this.props.history.push(`user/${id}`);
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
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Group>
                                <Form.Input label="First Name" placeholder="First Name" />
                                <Form.Input label="Middle Name" placeholder="Middle Name" />
                                <Form.Input label="Last Name" placeholder="Last Name" />
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
                                <Form.Input label="Address" placeholder="Address" />
                                <Form.Input label="Work Place" placeholder="Work Place" />
                                <Form.Input label="Title" placeholder="Title" />
                            </Form.Group>
                            <ImageUploader
                                withIcon={false}
                                buttonText='Choose profile picture'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            />
                            <Button color='teal' size='large' onClick={this.comlete}>
                                Complete Registration
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )

    }
}