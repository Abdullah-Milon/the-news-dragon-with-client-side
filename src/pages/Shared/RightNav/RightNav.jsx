import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import { FaGoogle, FaGithubSquare, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3 >Login With</h3>
            <Button variant="outline-primary">  <FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary my-2"> <FaGithubSquare /> Login With Github</Button>
            <div>
                <h3 className='mt-4'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook/> facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;