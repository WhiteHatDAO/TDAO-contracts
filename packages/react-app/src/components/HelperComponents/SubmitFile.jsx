import React from 'react';

export const SubmitFile = ({buttonText, onChange, onClick}) => {

    return (
        <div>
            <input type="file" onChange={onChange} />
            <button onClick={onClick}>
                {buttonText}
            </button>
        </div>
    )
}
