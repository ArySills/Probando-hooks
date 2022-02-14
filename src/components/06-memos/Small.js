import React from 'react';

export const Small = React.memo ( ({value}) => {

    console.log('Me llame');

    return (
        <small>
            {value}
        </small>
    );
});


