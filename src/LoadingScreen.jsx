import React from 'react';
import logo from '../public/logo2.webp'; // Replace with the actual path to your logo

const LoadingScreen = () => {
  return (
    <div style={styles.loadingContainer}>
      <img src={logo} alt="Website Logo" style={styles.logo} />
    </div>
  );
};

const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff', // Optional: Set background color
  },
  logo: {
    width: '150px', // Adjust size as needed
    height: 'auto',
  },
};

export default LoadingScreen;
