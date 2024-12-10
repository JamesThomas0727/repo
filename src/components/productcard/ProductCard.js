import * as React from 'react';
import "./ProductCard.css"

const moneytypes = ["A$ ", "CA$ ", "€ ", "£ ", "$ ",];
export default function ProductCard(props) {
    const product = props.product;
    const moneytype = product.moneytype;
    let moneystr = moneytypes[moneytype];
    return (
        <div className='card'>
            <img src={product.img} alt={product.product_name}></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
    );
}