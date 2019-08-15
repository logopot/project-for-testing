import React from 'react';

const Button = (props) => {
    return (
        <button className = {`button ${props.className}`} type = "button">List your property</button>
    )
}

export {Button};