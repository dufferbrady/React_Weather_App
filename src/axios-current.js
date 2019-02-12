import axios from 'axios'

const currentInstance = axios.create({
    BaseURL: 'http://api.apixu.com/v1'
})

export default currentInstance