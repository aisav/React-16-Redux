import axios from 'axios'

const instance = axios.create({
    baseURL: "https://react-burger-builder-a3c7d.firebaseio.com/"
})

export default  instance;