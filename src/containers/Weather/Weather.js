import React, { Component } from 'react'

import classes from './Weather.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import WeatherForecast from '../WeatherForecast/WeatherForecast'
import Button from '../../components/UI/Button/Button'
import TempToggler from '../../components/UI/TempToggler/TempToggler'
import ErrorHandling from '../../components/ErrorHandling/ErrorHandling'

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
        cloudiness: undefined,
        celsiusActive: false,
        farenheitActive: false,
        error: false,
        message: ""
    }

    componentDidMount () {
        this.setState({loading: true})
        const city = this.props.location.search.substr(6)
        this.getWeatherHandler(city);
    }

    componentDidUpdate = prevProps => {
        if(this.props.location.search !== prevProps.location.search) {
            this.setState({loading: true})
            const city = this.props.location.search.substr(6)
            this.getWeatherHandler(city);
        }
    }

    getWeatherHandler = city => {
        const API_Key = "4c04be157de57a31223958d6b571bd89"
        const updatedCity = city.charAt(0).toUpperCase() + city.slice(1);
        this.setState({city: updatedCity})
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${updatedCity}&APPID=${API_Key}`)
            .then(res => res.json())
            .then(data => {
                const temp = (data.main.temp - 273.15).toFixed(0);
                const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
                const date = new Date()
                const today = this.getDateHandler(date);
                const windSpeed = (data.wind.speed * 360 / 1000).toFixed(0);
                this.setState({
                    country: data.sys.country,
                    temperature: temp,
                    icon: icon,
                    description: data.weather[0].description,
                    loading: false,
                    date: today,
                    humidity: data.main.humidity,
                    wind: windSpeed,
                    cloudiness: data.clouds.all,
                    celsiusActive: true
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    message: `Sorry, something went wrong searching for "${updatedCity}".`,
                    error: error
                })
            })
    }

    getDateHandler = date => {
        const dd = DATES[date.getDay()]
        let hh = date.getHours()
        let mm = date.getMinutes()
        if(hh < 10) {
            hh = `0${hh}`
        }
        if(mm < 10) {
            mm = `0${mm}`
        }
        return `${dd}, ${hh}:${mm}`;
    }

    setCelsiusHandler = farenheit => {
        const Celcius = ((farenheit - 32) * (5 / 9)).toFixed(0);
        this.setState({
            temperature: Celcius,
            celsiusActive: true,
            farenheitActive: false
        })
    }

    setFarenheitHandler = celsius => {
        const Farenheit = ((celsius * (9 / 5)) + 32).toFixed(0);
        this.setState({
            temperature: Farenheit,
            celsiusActive: false,
            farenheitActive: true
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
                forecast: forecastDays
            })
        })
        .catch(error => 
            this.setState({
                loading: false,
                message: 'Something went wrong. Please try again.',
                error: error
            })
        )
    }
    render() {
        let weatherForecast = null

        if(this.state.showForecast) {
            weatherForecast = (
                <WeatherForecast 
                forecast={ this.state.forecast }
                celsiusActive={ this.state.celsiusActive }
                farenheitActive={ this.state.farenheitActive }/>
            )
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
                                <TempToggler active={ this.state.celsiusActive } click={ () => this.setCelsiusHandler(this.state.temperature)}>
                                   &deg; C 
                                </TempToggler>
                                <span> | </span> 
                                <TempToggler active={ this.state.farenheitActive } click={ () => this.setFarenheitHandler(this.state.temperature)}>
                                    &deg; F 
                                </TempToggler>
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
        if(this.state.error) {
            weather = <ErrorHandling error={this.state.error} message={this.state.message}/>
        }
        return (
            <div>
                { weather }
            </div>
        )
    }
}


export default weather