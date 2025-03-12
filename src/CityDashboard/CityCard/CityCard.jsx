import styles from './CityCard.module.css';

const CityCard = ({ city }) => {
    return (
        <div className={styles.container}>
            <div className={styles.cityCard}>
                <h3>{city.name}</h3>
                <img src={city.imageUrl} alt={city.name} />
                <p>{city.description}</p>
                <ul>
                    {city.facts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CityCard;
