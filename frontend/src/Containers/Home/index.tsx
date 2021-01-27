import React, { useEffect  } from 'react';
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux';


const Home =  () => {

    const user = useSelector(
        (state) => state.users.user
      );
      useEffect(() => {
        console.log(user);
      }, [user]);

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

                <Link to='/contract/create'>
                        add
                </Link>
            </div>
            <h2 className="cards-title">Favourite</h2>
            {
                user?.contracts.map((item, index) => {
                    return (
                        <div className="card" key={index} >
                            <div className="overlay">
                                <p>{item.name}</p>
                                <div className="strip">
                                    <div className="like-menu">
                                  
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


export default Home;