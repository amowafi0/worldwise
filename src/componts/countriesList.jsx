import styles from './CountryList.module.css'
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";
import city from "./City.jsx";
import {useCities} from "../contexts/citiescontext.jsx";


function CountryList() {
    const {cities ,isLoading} = useCities();

    if(isLoading) return <Spinner/>
    if (!cities.length)return <Message message="add your frist city by clicking on a city on the map"/>
    const countries = cities.reduce((arr,city)=>{
        if(!arr.map((el)=>el.country).includes(city.country))
            return  [...arr , {country:city.country, emoji:city.emoji}]

        else return arr;
        }
        ,[])
    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.country} />
            ))}
        </ul>
    )
}

export default CountryList
