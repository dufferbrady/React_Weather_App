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
        // let weather = (
        //     <Weather 
        //         city={ this.state.city }
        //         country={ this.state.country }
        //         temperature={ this.state.temperature }
        //         description={ this.state.description }
        //         icon={ this.state.icon }
        //         show={ this.state.showWeather }
        //         getForecast={ this.getForecast } 
        //         forecast={ this.state.forecast }
        //         showForecast={ this.state.showForecast }/>
        // )
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