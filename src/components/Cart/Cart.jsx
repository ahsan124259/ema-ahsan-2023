import React from 'react';
import'./cart.css'

const Cart = ({cart5}) => {
  
    let total=0;
    let shipping=0;

    for(const x of cart5){
        total=total+x.price ;
        shipping=shipping+x.shipping;
    }
    const tax=parseFloat(((total+shipping)*.10).toFixed(2));
    const grandTotal=(total+shipping+tax);
   
    return (
        <div className='cart'>
            <h3>Selected Item:{cart5.length}</h3>
            <p>Total;{total}</p>
            <p>Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <p>GrandTotal:{grandTotal.toFixed(2)}</p>
           
          
        </div>
    );
};

export default Cart;