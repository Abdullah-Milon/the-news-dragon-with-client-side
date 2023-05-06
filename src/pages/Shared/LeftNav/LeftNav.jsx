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
        <div >
            <h3>All categories</h3>
            <div className='ps-5'>
                {
                    categories.map(category => <h6
                    key={categories.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </h6> )
                }
            </div>
        </div>
    );
};

export default LeftNav;