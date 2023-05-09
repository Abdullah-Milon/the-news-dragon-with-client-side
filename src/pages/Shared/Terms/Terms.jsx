import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Our Terms and conditions</h2>
            <h6>Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Explicabo, consectetur <br />
                 ducimus eaque esse rem cumque dolores pariatur <br /> 
                 non quidem ipsam alias iure sed molestias provident, <br />
                  laudantium reiciendis ullam nam quo!</h6>
                  <h5>Go back to <Link to="/register">Register</Link> </h5>
        </Container>
    );
};

export default Terms;