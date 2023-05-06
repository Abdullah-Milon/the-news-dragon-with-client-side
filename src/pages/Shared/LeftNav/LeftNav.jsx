import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => console.log(categories))
        .catch(error => console.error(error))
    },[])

    return (
        <div>
            <h3> left nav part</h3>
        </div>
    );
};

export default LeftNav;