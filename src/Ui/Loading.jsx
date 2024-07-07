import React from 'react';

const Loading = () => {
    return (
        <div className='absolute bg-slate-200/20 backdrop-blur-sm inset-0 flex justify-center items-center'>
            <div className='loader'></div>
        </div>
    );
}

export default Loading;
