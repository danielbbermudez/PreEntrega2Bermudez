import React from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import data from "../utils/data"
import Header from './header/Header';

const ItemDetailContainer = () => {
    let productId = useParams().id
    const element = data.find(item => item.id === Number(productId))
    return (
        <>
            <Header/>
            <Item item={element}/>
        </>
    );
};

export default ItemDetailContainer;