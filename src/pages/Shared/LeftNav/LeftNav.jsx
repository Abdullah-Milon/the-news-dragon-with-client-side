import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h3>All categories</h3>
            <div>
                {
                    categories.map(category => {
                        <p
                            key={categories.id}
                        >
                        <Link>{category.name}</Link>
                    </p>
                    })
                }
            </div>
        </div>
    );
};

export default LeftNav;