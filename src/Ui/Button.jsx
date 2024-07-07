import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({children ,disabled , to , type , onclick}) => {

    const  base = `bg-yellow-400 rounded-md m-2 uppercase font-semibold text-stone-800 hover:bg-yellow-300
                        hover:text-stone-500 transition-colors duration-300 focus:outline-nonefocus:ring focus:ring-yellow-300
                        focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed ` ;
    const styles = {
        primary:` ${base} px-4 py-3 md:px-6 md:py-4` ,
        small:` ${base} px-2 py-2 md:px-5 md:py-2.5 text-xs ` ,
        secondary:`${base} border-2 bg-transparent border-stone-300 text-stone-400 px-4 py-2.5 md:py-3.5 hover:bg-stone-300 
                    hover:text-stone-800 focus:ring-stone-200` ,
        round:base + 'w-[35px] h-[35px] rounded-[50%] text-sm'
    }
    if(to) return (
        <Link className={styles[type]} to={to}>{children}</Link>
    )
    if(onclick) return(
        <button
            onClick={onclick}
            disabled={disabled}
            className={styles[type]}
            >
            {children} 
        </button>
    )
    return (
        <button
            disabled={disabled}
            className={styles[type]}
        >
           {children} 
        </button>
    );
}

export default Button;
