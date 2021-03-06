import React from 'react'
const Button = props => {
    const { label, className, handleClick } = props;
    return (
        <>
            <button
                className={className}
                label={label}
                onClick={handleClick}
            >
                {label}
            </button>
        </>
    )
}

export default Button;