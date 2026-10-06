import React from 'react';

const Cart = () => {
  return (
    <div className="container">
      <h1>Your Cart 🛒</h1>
      <p>Cart functionality coming soon bro!</p>
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '10px', 
        marginTop: '2rem',
        textAlign: 'center' 
      }}>
        <p>Your cart is empty bro! Add some medicines first.</p>
        <button className="btn btn-primary">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;