import React from 'react';
import Tariff from './Tariff';
import styles from './Tariff.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Tariff name="Безлимитный 300" price="300" speed="10" />
      <Tariff name="Безлимитный 450" price="450" speed="50" />
      <Tariff name="Безлимитный 550" price="550" speed="100" highlighted />
      <Tariff name="Безлимитный 1000" price="1000" speed="200" />
    </div>
  );
};

export default App;

