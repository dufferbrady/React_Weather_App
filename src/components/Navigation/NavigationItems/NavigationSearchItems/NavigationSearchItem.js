import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import classes from './NavigationSearchItems.css'

class NavSearchItem extends Component {
    state = {
        newCity: ""
    }

    inputCityHandler = event => {
        this.setState({newCity: event.target.value})
    }

    submitHandler = async event => {
        event.preventDefault();
        const city = event.target.elements.city.value
        const queryParams = encodeURIComponent(city)
        this.props.history.push({
            pathname: '/forecast',
            search: `?city=${queryParams}`
        })
        this.setState({newCity: ""})
    }

    render() {
        return (
            <li>
                <form className={ classes.NavigationSearchItem } onSubmit={ this.submitHandler }>
                    <input 
                    autoComplete="off"
                    name="city"
                    className={ this.props.active ? classes.active : null }
                    type="text" 
                    value={ this.state.newCity }
                    placeholder="Search New City"
                    onChange={ this.inputCityHandler }/>
                </form>
            </li>
        )
    }
}

export default withRouter(NavSearchItem)