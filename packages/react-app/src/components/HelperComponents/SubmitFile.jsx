import React from 'react';

export const SubmitFile = ({fileName, onChange}) => {

    return (
        <div>
            <input type="file" name={fileName} onChange={onChange} />
        </div>
    )
}
