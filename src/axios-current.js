import axios from 'axios'

const currentInstance = axios.create({
    BaseURL: 'api.openweathermap.org/data/2.5/weather'
})

export default currentInstance