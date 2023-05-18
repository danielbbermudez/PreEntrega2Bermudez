import data from '../utils/data'
import Item from './Item';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header/Header';

const ItemListContainer = () => {
    const [items, setItems] = useState(data)
    let categoryId = useParams().id
    console.log(items);

    useEffect(() => {
        if (categoryId) {
            setItems(data.filter(item => item.categoryId === Number(categoryId)))
        }
    }, [categoryId])

    return (
        <>
            {categoryId && <Header/>}
            <div>
                {items.map(item => {
                    return (
                        <div key={item.id}>
                            <Item item={item}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default ItemListContainer;