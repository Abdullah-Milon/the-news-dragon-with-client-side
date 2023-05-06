import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import { FaGoogle, FaGithubSquare, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button variant="outline-primary">  <FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithubSquare /> Login With Github</Button>
            <div>
                <h3>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook/> facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> instagram </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;