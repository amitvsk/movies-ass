
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


const Movieslist = () => {
    const [listOfMovies, setMoviesList] = useState([]);
    console.log(listOfMovies)
    
        
    
 
    async function getMoviesList(page=1) {
        // const apiKey = 'e99f2e4b';
        // const proxy = 'http://cors-anywhere.herokuapp.com/';
     
        let list = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=e99f2e4b`)
        
       setMoviesList([list])
        
    }


    useEffect(() => {
        getMoviesList();
    }, [])


    return (
        <>
            {

                listOfMovies.map((item) => {
                    return (
                        <div className="card" style={{ width: "17rem" }}>
                            <img className="card-img-top image-fluid" src={item.data.Poster} alt="Card" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.data.Title}<br></br> <span>{item.data.imdbRating} imdbRating</span></h5>
                                <p className="card-text">{item.data.Plot}
                                </p>
                                <button href="#" className="btn btn-primary">
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    )
                })

            }
            {

                listOfMovies.map((item) => {
                    return (
                        <div className="card" style={{ width: "17rem" }}>
                            <img className="card-img-top image-fluid" src={item.data.Poster} alt="Card" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.data.Title}<br></br> <span>{item.data.imdbRating} imdbRating</span></h5>
                                <p className="card-text">{item.data.Plot}
                                </p>
                                <button href="#" className="btn btn-primary">
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    )
                })

            }
            {

                listOfMovies.map((item) => {
                    return (
                        <div className="card" style={{ width: "17rem" }}>
                            <img className="card-img-top image-fluid" src={item.data.Poster} alt="Card" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.data.Title}<br></br> <span>{item.data.imdbRating} imdbRating</span></h5>
                                <p className="card-text">{item.data.Plot}
                                </p>
                                <button href="#" className="btn btn-primary">
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    )
                })

            }
            {

                listOfMovies.map((item) => {
                    return (
                        <div className="card" style={{ width: "17rem" }}>
                            <img className="card-img-top image-fluid" src={item.data.Poster} alt="Card" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.data.Title}<br></br> <span>{item.data.imdbRating} imdbRating</span></h5>
                                <p className="card-text">{item.data.Plot}
                                </p>
                                <button href="#" className="btn btn-primary">
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    )
                })

            }
            {

                listOfMovies.map((item) => {
                    return (
                        <div className="card" style={{ width: "17rem" }}>
                            <img className="card-img-top image-fluid" src={item.data.Poster} alt="Card" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.data.Title}<br></br> <span>{item.data.imdbRating} imdbRating</span></h5>
                                <p className="card-text">{item.data.Plot}
                                </p>
                                <button href="#" className="btn btn-primary">
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    )
                })

            }

        </>
    )
}

export default Movieslist;
