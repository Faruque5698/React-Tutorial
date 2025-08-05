import React from 'react';

function Header(props) {
    const { title } = props;
    return (
        <div className="text-center m-2">
            <h1 className="text-danger">{title}</h1>
        </div>
    );
}

export default Header;