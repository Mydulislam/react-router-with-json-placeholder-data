import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    
    return (
        <div>
            <h1>Name: {friendDetails.name}</h1>
            <h3>Name: {friendDetails.email}</h3>
        </div>
    );
};

export default FriendDetails;