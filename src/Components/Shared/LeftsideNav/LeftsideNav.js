import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../Pages/Category/Category';

const LeftsideNav = () => {
    const [Category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newsCategories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <h2>News Category {Category.length}</h2>
            {
                Category.map(cat => <p key={cat.id}>
                    <Link to={`/category/${cat.id}`}> {cat.name} </Link>
                </p>)
            }
        </div >
    );
};

export default LeftsideNav;