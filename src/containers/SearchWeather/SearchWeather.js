import React, { Component } from 'react'

import WeatherForm from '../../components/WeatherForm/WeatherForm'
import Spinner from '../../components/UI/Spinner/Spinner'

class searchWeather extends Component {
    state = {
        loading: false,
    }

    getCity = async e => {
        e.preventDefault();
        this.setState({ loading: true })
        const city = e.target.elements.city.value
        this.setState({
            loading: false
        })
        const queryParams = encodeURIComponent(city);
        this.props.history.push({
            pathname: "/forecast",
            search: `?city=${queryParams}`
        })
    }

    render() {
        console.log("[SearchWeather] RENDER:", this.props)
        let weather = null

        if(this.state.loading) {
            weather = <Spinner />
        }

        return (
            <div>
                <WeatherForm 
                load={ this.getCity } />
                { weather }
            </div>
        )
    }
}

export default searchWeather