import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MyJumbotron from '../components/MyJumbotron';
import MyNavbar from '../components/MyNavbar';
import MiddleBar from '../components/MiddleBar';
import Hourly from '../components/Hourly';
import { useEffect, useState } from 'react';

function Home() {
    const [weatherData, setWeatherData] = useState(undefined)

    const fetchWeather = async () => {
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&appid=d213382463f7300293ae111ce79d76b4")

            if (response.ok) {
                const weatherResponse = await response.json()
                console.log(weatherResponse)
                let weatherTrimmed = weatherResponse.hourly.slice(0, 24)
                setWeatherData(weatherTrimmed)
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
        <MyJumbotron />
        <MiddleBar />
        {weatherData && weatherData.map(forecast => {
            return <Hourly dt={forecast.dt} />
        })}
    </div>
    );
}

export default Home;
