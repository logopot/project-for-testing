import React from 'react';

const ButtonMore = (props) => {
    return (
        <button className = {`button-more ${props.className}`} type = "button">More about</button>
    )
}

export {ButtonMore};