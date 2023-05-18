import React from 'react';
import Logo from './Logo'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
         <Logo/>
         <ul>
            <Link to={`/category/1`}> <li> Placa Video </li> </Link>
            <Link to={`/category/2`}> <li> Procesador </li> </Link>
            <Link to={`/category/3`}> <li> Placa Madre </li> </Link>
            <Link to={`/category/4`}> <li> Fuente </li> </Link>
            <li> Cart </li>
         </ul> 
        </>
    );
};

export default Header;