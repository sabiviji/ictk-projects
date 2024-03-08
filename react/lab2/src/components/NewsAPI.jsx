import React from 'react'
import 'axios'
import axios from 'axios'

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=66f721afb58745d382e53074523aaef6"
let data = null

async function NewsAPI () {
    await axios.get(`${API_URL}`).then(response => {
        // console.log(response.data.articles)
        data = response.data.articles       
    }).catch(error => {
        console.log(error)
    })

    return data;
}

export default NewsAPI