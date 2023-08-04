import React, { useEffect, useState } from 'react';
import './order.css';
import Product from '../product/Product';
import Cart from '../Cart/Cart';

const Order = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(id)=>{
        // console.log(id)
        const newCart=[...cart,id];
        setCart(newCart)
    }
    
    return (
        <div className='order'>
           <div className="product-container">
            
            {products.map(product=><Product key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)}
            
            </div> 
           <div className="order-container">
           <Cart cart5={cart}></Cart>
            
            
            </div> 
            
        </div>
    );
};

export default Order;
