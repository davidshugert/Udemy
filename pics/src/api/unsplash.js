import axios from 'axios'

export default axios.create({
    headers: {
        Authorization: 'Client-ID 04e415ef9a6cb5d755ee6846e2a40f4b995436b9fe72c29bc8d2318c2fda1b4b'
    },
    baseURL: 'https://api.unsplash.com/'
})
