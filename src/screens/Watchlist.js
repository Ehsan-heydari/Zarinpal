import React, { useEffect, useState } from 'react';
import Film from './../commponents/Film';
import { findFilmById } from '../data/Remote';
import { getWatchlistIds } from '../data/Storage';




function Watchlist() {
    const [watchlist, setWatchlist] = useState(getWatchlistIds())


    const [films, setFilms] = useState([]);
    useEffect(() => {
        watchlist.map(id => findFilmById(id, (data) => (setFilms((prev) => [...prev, data])
        ), (error) => (console.log(error))))
    }, []);
    return (
        <>

            <div className='film-container'>
                {films.length > 0 && films.map(film => {
                    //
                    const starFilled = watchlist.includes(film.id)

                    return (
                        <Film
                            key={film.id + starFilled}
                            title={film.title}
                            poster_path={film.poster_path}
                            overview={film.overview}
                            vote_average={film.vote_average}
                            id={film.id}
                            starFilled={starFilled}
                            onClickHandler={() => { }}
                        />
                    )
                })}
            </div>
        </>
    )

}
export default Watchlist