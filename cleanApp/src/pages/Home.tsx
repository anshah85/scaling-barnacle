import React from 'react';
import styles from './Home.module.css'; // A CSS module for homepage-specific styles

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to the LA Wildfire Debris Cleanup App</h1>
      <p>
        Our goal is to provide safe, reliable information and resources to help
        you clean debris from recent wildfires, while prioritizing health and safety.
      </p>

      <section className={styles.disclaimer}>
        <h2>Important Safety Disclaimer</h2>
        <ul>
          <li>Always check local government announcements for active fire zones.</li>
          <li>Wear appropriate protective gear when handling debris.</li>
          <li>Follow official directives if fires are still active in your area.</li>
        </ul>
      </section>

      <section>
        <h2>Available Resources</h2>
        <ul>
          <li>Preventive measures to reduce fire damage</li>
          <li>Safe debris cleanup techniques (ash, hazardous materials, etc.)</li>
          <li>Official local resources, contacts, and volunteer groups</li>
        </ul>
      </section>
      
      <p>
        <strong>Note:</strong> This website is <em>not</em> an official emergency service. 
        Always follow directives from local authorities.
      </p>
    </div>
  );
};

export default Home;
