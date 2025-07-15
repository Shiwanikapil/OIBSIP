import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const pizza = location.state;

  const handleBackToMenu = () => {
    navigate('/menu');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🎉 Order Placed Successfully! 🎉</h2>
        <p style={styles.message}>
          Thank you for ordering <strong>{pizza?.name || "your pizza"}</strong>! 🍕<br />
          We're preparing it with love and will deliver it to you soon!
        </p>
        <button style={styles.button} onClick={handleBackToMenu}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3e0',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 0 20px rgba(0,0,0,0.15)',
    textAlign: 'center',
    maxWidth: '400px',
  },
  heading: {
    color: '#d84315',
    fontSize: '1.8rem',
    marginBottom: '15px',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '25px',
  },
  button: {
    padding: '10px 24px',
    backgroundColor: '#d80d0aff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default OrderConfirmation;