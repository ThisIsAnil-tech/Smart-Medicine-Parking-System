import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now since backend might not be ready
    const mockMedicines = [
      {
        _id: '1',
        name: 'Paracetamol',
        description: 'Pain reliever and fever reducer',
        price: 50,
        image: '/images/medicine1.jpg',
        prescriptionRequired: false,
        stock: 100
      },
      {
        _id: '2', 
        name: 'Vitamin C',
        description: 'Immune system booster',
        price: 200,
        image: '/images/medicine2.jpg',
        prescriptionRequired: false,
        stock: 50
      },
      {
        _id: '3',
        name: 'Amoxicillin',
        description: 'Antibiotic for bacterial infections',
        price: 150,
        image: '/images/medicine3.jpg',
        prescriptionRequired: true,
        stock: 30
      }
    ];
    
    setMedicines(mockMedicines);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2>Loading medicines bro... 💊</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ margin: '2rem 0' }}>
        <h1>Our Medicines 💊</h1>
        
        <div className="medicines-grid">
          {medicines.map(medicine => (
            <div key={medicine._id} className="medicine-card">
              <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '8px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem'
              }}>
                💊
              </div>
              <h3 className="medicine-name">{medicine.name}</h3>
              <p style={{ marginBottom: '1rem', color: '#666' }}>
                {medicine.description}
              </p>
              <div className="medicine-price">₹{medicine.price}</div>
              <div style={{ 
                color: medicine.prescriptionRequired ? '#e74c3c' : '#27ae60',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}>
                {medicine.prescriptionRequired ? '📋 Prescription Required' : '✅ OTC'}
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicines;