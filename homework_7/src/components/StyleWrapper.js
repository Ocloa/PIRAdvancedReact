import React from 'react';

const StyleWrapper = (Component, styles) => (props) => (
    <div style={styles}>
        <Component {...props} />
    </div>
);

export default StyleWrapper;