import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <>
        <div>
            <Link to={`/item/${item.id}`}> <img alt="" src={item.imageProduct.firtsImage}/> </Link>
            <h3> {item.title} </h3>
            <p> {item.description} </p>
        </div>
        </>
    );
};

export default Item;