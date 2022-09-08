import './Product-moduls.css';
import { BiTrash } from "react-icons/bi";
import { useEffect } from 'react';
const Product = ({ onChange, onDecrement, onIncrement, onDelete, product }) => {
    useEffect(() => {
        console.log("product.js useEffect");
        return ()=>{
            console.log("product CWM");
        }
    }, []);
    return (
        <div className="product">
            <p>title : {product.title}</p>
            <p>price : {product.price}</p>
            <input type="text" onChange={onChange} value={product.title} className="input"></input>
            <span className='value'>{product.quantity}</span>
            <button className={`decrement dec ${product.quantity === 1 ? "trash" : null}`} onClick={onDecrement}>
                {product.quantity > 1 ? "-" : <BiTrash />}
            </button>
            <button className='increment inc' onClick={onIncrement}>+</button>
            <button onClick={onDelete} className="deleteBtn">delete</button>
        </div>
    );
}

export default Product;