import React, { Component } from 'react'

import WeatherForm from '../../components/WeatherForm/WeatherForm'

class searchWeather extends Component {

    getWeather = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        const API_Key = '4c04be157de57a31223958d6b571bd89'
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
        const response = await api_call.json();
        console.log(response);
    }

    render() {
        return (
            <WeatherForm 
            load={ this.getWeather }/>
        )
    }
}

export default searchWeather