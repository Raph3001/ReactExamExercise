import axios from "axios";

export default axios.create({
    baseURL: "http://www.omdbapi.com/",
    params: {
        apikey: '1b1e57c7',
        s: 'galaxy'
    }
})
