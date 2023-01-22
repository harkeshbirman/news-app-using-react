import React, {useState, useEffect } from 'react'
import NewsPiece from './NewsPiece'

export default function Content(props) {
    const [articles, setArticles] = useState([]);

    
    (async () => {
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=ff8c270772ab45ad92ba021cb66b2e51`)
        let parsedData = await data.json();
        console.log(parsedData.articles);
        setArticles(parsedData.articles);
    })();


    return (
        <div className="container">
            <h1>Top-Headlines for Today.</h1>
                <div className="row">
                    {
                        articles.map((element)=>{
                            return <div className="col-md-4" style={{margin: "0px 0px 10px",padding:"5px"}}key={element.url}>
                                <NewsPiece title={element.title} description={element.description} newsUrl={element.url}  imageUrl={element.urlToImage}/>
                            </div>  
                        })
                    }
                </div>
        </div>
    )

}