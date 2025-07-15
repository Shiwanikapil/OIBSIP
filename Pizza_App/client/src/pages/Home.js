import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to My Pizza App 🍕</h1>
        <p style={styles.tagline}>Deliciously crafted just for you!</p>

        <div style={styles.links}>
          <Link to="/signup" style={styles.button}>Sign Up</Link>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/dashboard" style={styles.button}>Dashboard</Link>
          
          </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url('https://i.pinimg.com/236x/37/b6/60/37b660cb40988dda83c8d345f62c83da.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'darken',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '20px',
  },
  content: {
    color: '#fff',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '12px',
    color: '#ffcc80',
    textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
  },
  tagline: {
    fontSize: '1.4rem',
    fontStyle: 'italic',
    color: '#f8f8f8',
    marginBottom: '30px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#e53935',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s',
  }
};

export default Home;