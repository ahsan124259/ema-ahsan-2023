import React from 'react';
import './product.css';

const Product = ({product, handleAddToCart}) => {
    
  const {name,price,ratings,seller ,img ,id}=product;


    return (
        <div className='product'>
            <img src={img} alt="img"/>
            <div>
               <h3>Name:{name}</h3>
               <p><small>Price:{price}</small></p>
               <p><small>seller:{seller}</small></p>
               <p><small>Rating:{ratings}</small></p>
               <button className='btn' onClick={()=>{handleAddToCart(product)}}>
                AddToCart
                </button>

            </div>
        </div>
    );
};

export default Product;