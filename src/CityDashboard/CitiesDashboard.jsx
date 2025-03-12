import { useState } from 'react';
import CitySelector from './CitySelector/CitySelector';
import CityCard from './CityCard/CityCard';
import citiesData from './citiesData';

import styles from './CitiesDashboard.module.css';

const CitiesDashboard = () => {
    const [selectedCity, setSelectedCity] = useState(citiesData[0]);

    const handleCityChange = (city) => {
        setSelectedCity(city);
    };

    return (
        <div className={styles.container}>
            <CitySelector cities={citiesData} onCitySelect={handleCityChange} />
            <CityCard city={selectedCity} />
        </div>
    );
};

export default CitiesDashboard;
