import React, { useEffect, useState } from 'react'
import NewsAPI from '../components/NewsAPI'


function Business() {
    const [news, setNews] = useState([])
    const isData = news != null && news.length > 0

    useEffect(() => {
        async function fetchData() {
            const result = await NewsAPI()
            // console.log("tyyez");
            setNews(result)
        }
        fetchData()
    }, [])

  return (
    <div>
        <ul>
            {isData ? news.map(article => (
                <li key={article.title}>{article.title}</li>
                )) :
            <h3>Loading....</h3>}
        </ul>
    </div>
  )
}

export default Business