import React from 'react';
import { useSelector } from 'react-redux';



const Username = () => {
    const user = useSelector(state=>state.user.username);
    return (
        <div className='text-sm font-semibold hidden sm:block'>
            {user ? user : 'no user'}
        </div>
    );
}

export default Username;
