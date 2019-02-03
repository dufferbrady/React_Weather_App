import React, { Component } from 'react'

import WeatherForm from '../../components/WeatherForm/WeatherForm'
import Weather from '../../components/Weather/Weather'
import Spinner from '../../components/UI/Spinner/Spinner'

class searchWeather extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        showWeather: false,
        loading: false
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
            description: response.current.condition.text,
            showWeather: true,
            loading: false
        })
    }

    render() {
        let weather = (
            <Weather 
                city={ this.state.city }
                country={ this.state.country }
                temperature={ this.state.temperature }
                description={ this.state.description }
                show={ this.state.showWeather }/>
        )
        if(this.state.loading) {
            weather = <Spinner />
        }
        return (
            <div>
                <WeatherForm 
                load={ this.getWeather }/>
                { weather }
            </div>
        )
    }
}

export default searchWeather