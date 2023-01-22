import React from 'react'

export default function NewsPiece(props) {
    return (
        <div className="card" style={{padding: "5px 5px"}}>
            <img src={props.imageUrl} className="card-img-top" alt={props.imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}...</p>
                    <a href={props.newsUrl} className="btn btn-primary">Read More...</a>
                </div>
        </div>
    )
} 