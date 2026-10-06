import React from 'react';

const Orders = () => {
  return (
    <div className="container">
      <h1>Your Orders 📦</h1>
      <p>Order history coming soon bro!</p>
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '10px', 
        marginTop: '2rem',
        textAlign: 'center' 
      }}>
        <p>No orders yet bro! Place your first order.</p>
        <button className="btn btn-primary">
          Shop Medicines
        </button>
      </div>
    </div>
  );
};

export default Orders;