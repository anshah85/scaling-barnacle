import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // We'll create a CSS module

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link to="/">LA Wildfire Debris Cleanup</Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/cleanup">Debris Cleanup</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/prevention">Preventive Measures</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
