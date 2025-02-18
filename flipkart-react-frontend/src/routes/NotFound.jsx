// ./routes/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Adjust the import based on your project structure

const NotFound = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>404 - Page Not Found</h1>
        <p style={styles.message}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" style={styles.link}>Go to Home</Link>
      </div>
    </>
  );
};

// Optional styles for the NotFound component
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '36px',
    color: '#2874f0',
  },
  message: {
    fontSize: '18px',
    color: '#555',
  },
  link: {
    fontSize: '16px',
    color: '#2874f0',
    textDecoration: 'none',
  },
};

export default NotFound;