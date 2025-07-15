import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      alert('⚠ You must login first!');
      navigate('/login');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert('👋 Logged out successfully');
    navigate('/');
  };

  const goToMenu = () => {
    navigate('/menu');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome, {user.name || 'User'}! 👋</h2>
        <p style={styles.subText}>You are now inside the Pizza Dashboard 🍕</p>

        <div style={styles.info}>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={goToMenu} style={styles.menu}>Continue to Menu</button>
          <button onClick={handleLogout} style={styles.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fce4ec',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 0 25px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '350px',
  },
  heading: {
    color: '#d81b60',
    marginBottom: '10px',
    fontSize: '2rem',
  },
  subText: {
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '20px',
  },
  info: {
    backgroundColor: '#fce4ec',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
    color: '#444',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menu: {
    padding: '10px 15px',
    backgroundColor: '#43a047',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  logout: {
    padding: '10px 15px',
    backgroundColor: '#d81b60',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Dashboard;