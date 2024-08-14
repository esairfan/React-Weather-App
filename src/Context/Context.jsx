import { createContext, useState } from "react";
import clear_icon from '../assets/clear.png';

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [temperature, setTemperature] = useState("21°C");
    const [city, setCity] = useState("London");
    const [humidity, setHumidity] = useState("91%");
    const [windSpeed, setWindSpeed] = useState("3.6 km/h"); 
    const [icon, setIcon] = useState(clear_icon); 

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_APP_ID
        }
    };

    const GetWeatherReport = async (city) => {
        if (city === "") {
            alert("Empty Input");
            return;
        }

        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_ID}&q=${city}&aqi=no`;
        try {
            let response = await fetch(apiUrl, options);
            let data = await response.json();

            setHumidity(data.current.humidity + '%');
            setTemperature(data.current.temp_c + "°C");
            setWindSpeed(data.current.wind_kph + ' km/h');
            setIcon(data.current.condition.icon);
            setCity(city); 
            setInput("");
        } catch (error) {
            alert("Error in Loading Data....");
            setInput("");
        }
    };

    const contextValue = {
        GetWeatherReport,
        input,
        setInput,
        city,
        temperature,
        humidity,
        windSpeed,
        icon
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
