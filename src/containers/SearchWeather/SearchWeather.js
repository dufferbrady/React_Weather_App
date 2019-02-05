import React, { Component } from 'react'

import WeatherForm from '../../components/WeatherForm/WeatherForm'
import Weather from '../../components/Weather/Weather'
import Spinner from '../../components/UI/Spinner/Spinner'

class searchWeather extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        icon: undefined,
        description: undefined,
        showWeather: false,
        loading: false,
        showForecast: false,
        forecast: null
    }
    getWeather = async e => {
        e.preventDefault();
        this.setState({ loading: true })
        const city = e.target.elements.city.value
        const API_Key = '3c170413a413436da5a231251190202'
        const api_call = await fetch(`http://api.apixu.com/v1/current.json?key=${API_Key}&q=${city}`);
        const response = await api_call.json();
        console.log(response);
        // this.props.history.push({
        //     pathname: "/Current"
        // })
        this.setState({
            city: response.location.name,
            country: response.location.country,
            temperature: response.current.temp_c,
            icon: response.current.condition.icon,
            description: response.current.condition.text,
            showWeather: true,
            loading: false
        })
    }

    getForecast = async e => {
        this.setState({ loading: true });
        const city = this.state.city;
        const days = 5;
        const API_Key = '3c170413a413436da5a231251190202';
        const api_call = await fetch(`http://api.apixu.com/v1/forecast.json?key=${API_Key}&q=${city}&days=${days}`);
        const response = await api_call.json();
        console.log(response);
        this.setState({
            loading: false,
            forecast: response.forecast.forecastday,
            showForecast: true
        })
        console.log("[SearchWeather]", this.state.forecast)
    }

    render() {
        let weather = (
            <Weather 
                city={ this.state.city }
                country={ this.state.country }
                temperature={ this.state.temperature }
                description={ this.state.description }
                icon={ this.state.icon }
                show={ this.state.showWeather }
                getForecast={ this.getForecast } 
                forecast={ this.state.forecast }
                showForecast={ this.state.showForecast }/>
        )


        if(this.state.loading) {
            weather = <Spinner />
        }
        return (
            <div>
                <WeatherForm 
                load={ this.getWeather } />
                { weather }
            </div>
        )
    }
}

export default searchWeather