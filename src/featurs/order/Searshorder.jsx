import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searshorder = () => {
    const [query , setQuery]=useState('');

    const navigate = useNavigate();

    function hadelSubmit(e){
        e.preventDefault();
        if(!query) return ;
        navigate(`/order/${query}`);
        setQuery('');
    }
    return (
        <form onSubmit={hadelSubmit}>
            <input  
                placeholder='seurch order #' 
                value={query} 
                onChange={(e)=>setQuery(e.target.value)}
                className='rounded-full px-4 py-2 text-sm bg-yellow-50 placeholder:text-stone-400 w-28 sm:w-64
                focus:sm:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-600
                focus:ring-opacity-50'

            />
        </form>
    );
}

export default Searshorder;
