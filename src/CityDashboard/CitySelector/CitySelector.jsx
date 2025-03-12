import styles from './CitySelector.module.css';

const CitySelector = ({ cities, onCitySelect }) => {

    const handleChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        onCitySelect(cities[selectedIndex]);
    };

    return (
        <form>
            <h2>Выберите город:</h2>
            <select onChange={handleChange}>
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default CitySelector;