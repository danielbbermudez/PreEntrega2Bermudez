import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <img src={logo} alt="" width={40}/>
        </Link>

    );
};

export default Logo;