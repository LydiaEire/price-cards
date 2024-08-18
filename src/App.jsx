import React, { useState } from 'react';
import Tariff from './components/tariff/Tariff';
import styles from './components/tariff/Tariff.module.css';

const App = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleSelect = (name) => {
    setSelectedTariff(name);
  };


  const tariffs = [
    { name: "Безлимитный 300", price: "300", speed: "10" },
    { name: "Безлимитный 450", price: "450", speed: "50" },
    { name: "Безлимитный 550", price: "550", speed: "100", highlighted: true },
    { name: "Безлимитный 1000", price: "1000", speed: "200" }
  ];

  return (
    <div className={styles.container}>
      {tariffs.map((tariff) => (
        <Tariff 
          key={tariff.name}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          highlighted={tariff.highlighted}
          selected={selectedTariff === tariff.name}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default App;
