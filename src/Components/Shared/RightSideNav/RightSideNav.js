import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carusel from '../Carusel/Carusel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"> <FaGoogle></FaGoogle> Log in with Google</Button>{' '}
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