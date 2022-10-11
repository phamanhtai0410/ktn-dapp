
import React from 'react';

const Button = ({color,text}) =>{
    return (
        <button className={`bg-[${color}] height: 110px;`}>
            {text}
        </button>
    )

}

export default Button;