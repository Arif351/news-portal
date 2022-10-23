import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState();
    const [accepted, setAccepted] = useState(false)

    const { createUser, updateProfileInfo, verifyEmail } = useContext(AuthContext);
    // const navigate = useNavigate();
    console.log(createUser);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                // navigate('/')
                form.reset()
                handleUserProfileInfo(name, photoUrl);
                handleEmailVerification();
                toast.success('Please, verify your email.')

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleConditions = (event) => {
        setAccepted(event.target.checked)
    }

    const handleEmailVerification = () => {
        return verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleUserProfileInfo = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileInfo(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" placeholder="Photo Url" name='photoUrl' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleConditions}
                        label={<>Accept <Link to='/terms'>terms and conditions.</Link> </>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;