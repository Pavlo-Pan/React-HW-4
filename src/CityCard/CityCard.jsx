import { useState } from 'react';

import CitySelector from './CitySelector/CitySelector';
import citiesData from './citiesData';

import styles from './CityCard.module.css';

const CityCard = () => {

    const [cityIndex, setCityIndex] = useState(0);

    const updateCity = (newIndex) => {
        setCityIndex(newIndex);
    }

    const element = citiesData[cityIndex];

    return (
        <div className={styles.container}>
            <div className={styles.cityCard}>
                <CitySelector updateCity={updateCity} />
                <h3>{element.name}</h3>
                <img src={element.imageUrl} alt={element.name} />
                <p>{element.description}</p>
                <ul>
                    {element.facts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CityCard;