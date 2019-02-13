import React, { Component } from 'react'

import classes from './Weather.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import WeatherForecast from '../WeatherForecast/WeatherForecast'
import Button from '../../components/UI/Button/Button'

const DATES = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

class weather extends Component {
    state = {
        city: null,
        loading: false,
        forecast: null,
        showForecast: false,
        forecastLoading: false,
        country: null,
        temperature: null,
        icon: null,
        description: null,
        date: undefined,
        humidity: undefined,
        wind: undefined,
        cloudiness: undefined
    }
    componentDidMount () {
        this.setState({loading: true})
        const city = this.props.location.search.substr(6)
        const API_key = "4c04be157de57a31223958d6b571bd89"
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const temp = (data.main.temp - 273.15).toFixed(0);
                const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
                const date = new Date()
                const dd = DATES[date.getDay()]
                const hh = date.getHours()
                const mm = date.getMinutes()
                const today = `${dd}, ${hh}:${mm}`
                const windSpeed = (data.wind.speed * 360 / 1000).toFixed(0);
                this.setState({
                    city: city,
                    country: data.sys.country,
                    temperature: temp,
                    icon: icon,
                    description: data.weather[0].description,
                    loading: false,
                    date: today,
                    humidity: data.main.humidity,
                    wind: windSpeed,
                    cloudiness: data.clouds.all
                })
                console.log(this.state.date)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getForecast = () => {
        this.setState({forecastLoading: true})
        const city = this.state.city
        const API_key = "4c04be157de57a31223958d6b571bd89"
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const forecastDays = data.list.slice(0, 7);
            this.setState({
                showForecast: true,
                // forecastLoading: false,
                forecast: forecastDays
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        console.log("RENDER:", this.state.date)
        // let attachedClasses = [classes.Weather, classes.Closed];
        // if(props.show) {
        //     attachedClasses=[classes.Weather] 
        // } 
        let weatherForecast = null

        if(this.state.showForecast) {
            weatherForecast = <WeatherForecast forecast={ this.state.forecast }/>
        }

        let weather = (
            <div className={ classes.Weather }>
                <div className={ classes.HeaderContainer }> 
                    <span className={ classes.HeaderCity }>{ this.state.city }, { this.state.country }</span>
                    <span className={ classes.spanItem }>{ this.state.date }</span>
                    <span className={ classes.spanItem }>{ this.state.description }</span>
                </div>
                <div className={ classes.WeatherContainer }>
                    <div className={ classes.WeatherInfo }>
                        <img className={ classes.WeatherIcon } src={ this.state.icon } alt="The current weather"/>
                        <div className={ classes.WeatherTempContainer }>
                            <span className={ classes.WeatherTemp }>{ this.state.temperature }</span>
                            <div className={ classes.WeatherTempToggle }>
                                <span className={ classes.Celsius }>
                                   &deg; C 
                                </span>
                                <span> |</span> 
                                <span className={ classes.Farenheit }>
                                    &deg; F 
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={ classes.WeatherStats }>
                        <div>Humidity: { this.state.humidity }%</div>
                        <div>Cloudiness: { this.state.cloudiness }%</div>
                        <div>Wind: { this.state.wind } km/h</div>
                    </div>
                </div>
                <Button 
                load={ this.getForecast }
                forecastLoading={ this.state.forecastLoading }
                forecast={ this.state.forecast }>
                    Get Forecast!
                </Button>
                { weatherForecast }
            </div>
        )
        if(this.state.loading) {
            weather = <Spinner />
        }
        return (
         <div>
            { weather }
         </div>
        )
    }
}


export default weather