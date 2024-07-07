import React from 'react';
import { Link } from 'react-router-dom';
import Searshorder from '../featurs/order/Searshorder';
import Username from '../featurs/user/username';

const Header = () => {
    return (
        <header className='flex justify-between items-center bg-yellow-500 uppercase px-8 py-3 border-b border-stone-200 sm:px-6'>
            <Link to='/' className='tracking-widest'>Fast Pizza</Link>
            <Searshorder />
            <Username />
        </header>
    );
}

export default Header;
