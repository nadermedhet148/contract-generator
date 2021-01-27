import React from 'react'
import { Link } from 'react-router-dom'



export default () => {
    const booksList: any[] = [];

    return (
        <div className="main-wrap">
            <div className="container">
                <div className="main-slide" data-sal="zoom-out"
                    data-sal-delay="300"
                    data-sal-duration="1200"
                    data-sal-easing="ease-out-bounce">
                    <h1>Books Diary</h1>
                    <p>" Gabriel.s small cottage was lit by a single candle that cast light on a collection of weapons along one wall and a few books on a bookshelf on another "</p>
                </div>

            </div>
            <h2 className="cards-title">Favourite</h2>
            {
                booksList.map((item, index) => {
                    return (
                        <div className="card" key={index} >
                            <div className="overlay">
                                <img src={item.metadata.hero.url} alt="" />
                                <div className="strip">
                                    <div className="like-menu">
                                        <ul className="position">
                                            <li> <a href={`https://twitter.com/intent/tweet?text=${item.slug}/${item.created}/${item.metadata.author.slug}`}><i className="fa fa-share-square-o fa-2x" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Link to={'/' + item.slug}>
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

