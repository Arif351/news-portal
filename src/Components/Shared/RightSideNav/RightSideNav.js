import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carusel from '../Carusel/Carusel';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { providerLogIn } = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();

    const handleGoogleSognIn = () => {
        providerLogIn(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSognIn} variant="outline-primary"> <FaGoogle></FaGoogle> Log in with Google</Button>{' '}
                <Button variant="outline-secondary"><FaGithub></FaGithub> Log in with GitHub</Button>{' '}
            </ButtonGroup>

            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> YouTube</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carusel></Carusel>
            </div>
        </div>
    );
};

export default RightSideNav;