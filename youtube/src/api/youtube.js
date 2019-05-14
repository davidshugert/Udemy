import axios from 'axios'

const KEY = 'AIzaSyApv8Ow4SNlPXd3LwPSJ0LJf0nnzrfdBSY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})