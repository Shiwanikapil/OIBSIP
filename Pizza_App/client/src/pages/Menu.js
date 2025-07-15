import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  const pizzas = [
    {
      name: "Margherita",
      price: "₹199",
      image: "https://www.dominos.co.in/files/items/Margherit.jpg"
    },
    {
      name: "Farmhouse",
      price: "₹299",
      image: "https://www.dominos.co.in/files/items/Farmhouse.jpg"
    },
    {
      name: "Peppy Paneer",
      price: "₹349",
      image: "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg"
    },
    {
      name: "Veg Extravaganza",
      price: "₹399",
      image: "https://www.dominos.co.in/files/items/Veg_Extravaganza.jpg"
    },
    {
      name: "Double Cheese",
      price: "₹279",
      image: "https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg"
    },
    {
      name: "Mexican Green Wave",
      price: "₹329",
      image: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
    }
  ];

  const handleOrder = (pizza) => {
    navigate('/orderform', { state: pizza });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Pizza Menu 🍕</h2>
      <div style={styles.menu}>
        {pizzas.map((pizza, index) => (
          <div key={index} style={styles.card}>
            <img src={pizza.image} alt={pizza.name} style={styles.image} />
            <h3>{pizza.name}</h3>
            <p>{pizza.price}</p>
            <button style={styles.button} onClick={() => handleOrder(pizza)}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#fffbe7',
    minHeight: '100vh',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#d84315',
    marginBottom: '30px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '250px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Menu;


