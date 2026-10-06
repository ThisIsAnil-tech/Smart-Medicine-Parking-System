import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Your Health, Our Priority 💊
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Get genuine medicines delivered to your doorstep. Fast, reliable, and secure.
          </p>
          <Link to="/medicines" className="btn btn-primary" style={{
            fontSize: '1.1rem',
            padding: '1rem 2rem'
          }}>
            Shop Medicines Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div className="feature-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
              <h3>Fast Delivery</h3>
              <p>Get your medicines delivered within 24 hours</p>
            </div>
            
            <div className="feature-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💯</div>
              <h3>Genuine Products</h3>
              <p>100% authentic medicines from trusted manufacturers</p>
            </div>
            
            <div className="feature-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
              <h3>Secure Payments</h3>
              <p>Safe and secure payment options</p>
            </div>
            
            <div className="feature-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;