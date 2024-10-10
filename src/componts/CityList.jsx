import styles from './CityList.module.css'
import Spinner from "./Spinner.jsx";
import CitiItem from "./CityItem.jsx";
import Message from "./Message.jsx";
import {useCities} from "../contexts/citiescontext.jsx";


function CityList() {
    const {cities ,isLoading} = useCities();
if(isLoading) return <Spinner/>
if (!cities.length)return <Message message="add your frist city by clicking on a city on the map"/>
    return (
        <ul className={styles.cityList}>
            {cities.map(city => (
                <CitiItem city={city} key={city.id} />
            ))}
        </ul>
    )
}

export default CityList
