import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({friend}) => {
    const {id, name, username, email, phone} = friend
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <h3>User Name: <Link to={`/friend/${id}`}>{username}</Link></h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Friend;