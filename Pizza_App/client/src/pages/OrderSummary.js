import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const pizza = location.state;

  if (!pizza) {
    return (
      <div style={styles.container}>
        <h2>No order found 😕</h2>
        <button onClick={() => navigate('/menu')} style={styles.button}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Order Summary ✅</h2>
      <img src={pizza.image} alt={pizza.name} style={styles.image} />
      <h3>{pizza.name}</h3>
      <p style={styles.price}>{pizza.price}</p>
      <p>🎉 You’ve successfully ordered <strong>{pizza.name}</strong>. It will be delivered soon!</p>
      <button onClick={() => navigate('/menu')} style={styles.button}>Order Another</button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f1f8e9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
    padding: '20px'
  },
  heading: {
    fontSize: '2rem',
    color: '#388e3c',
    marginBottom: '20px'
  },
  image: {
    width: '250px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    marginBottom: '15px',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '10px'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#f57c00',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default OrderSummary;