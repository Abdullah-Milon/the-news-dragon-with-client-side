import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provides/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
            setError('');
            setSuccess('User has been created successfully.')
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" nam='accept' label="Accept Terms and Condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account ? <Link to="/login"> Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                <h6>{success}</h6>
                </Form.Text>
                <Form.Text className="text-danger">
                <h6>{error}</h6>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;