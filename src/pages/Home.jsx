import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MyJumbotron from '../components/MyJumbotron';
import MyNavbar from '../components/MyNavbar';
import MiddleBar from '../components/MiddleBar';
import Hourly from '../components/Hourly';
import { useEffect, useState } from 'react';

function Home() {
    const [hourlyData, setHourlyData] = useState(undefined)
    const [currentData, setCurrentData] = useState(undefined)

    const fetchWeather = async () => {
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&appid=db532a93abb61818899e98b3f8a5c286")

            if (response.ok) {
                const weatherResponse = await response.json()
                console.log(weatherResponse)
                let weatherTrimmed = weatherResponse.hourly.slice(0, 24)
                setHourlyData(weatherTrimmed)
                setCurrentData(weatherResponse.current)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return (
    <div>
        <MyNavbar />
        {currentData && <MyJumbotron windSpeed={currentData.wind_speed} temp={currentData.temp} />}
        <MiddleBar />
        {hourlyData && hourlyData.map(forecast => {
            return <Hourly feelsLike={forecast.feels_like} windSpeed={forecast.wind_speed} humidity={forecast.humidity} dt={forecast.dt} temp={forecast.temp} description={forecast.weather[0].description} />
        })}
    </div>
    );
}

export default Home;
