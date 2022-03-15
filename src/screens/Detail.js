import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { findFilmById } from '../data/Remote';
const IMG_API = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 6) {
        return "orange"
    } else {
        return "red"
    }
}

function Detail() {


    let { id } = useParams()
    const [film, setFilm] = useState({});

    useEffect(() => {

        findFilmById(id, (data) => setFilm(data), (error) => (console.log(error)))
    }, []);

    return (
        <div className='detail'>
            <div className='detail-top'>
                <div>
                    <h1>{film.title}</h1>
                    <p>Release Time :  {film.release_date}</p>
                </div>
                <div className='detail-top-links'>
                    <a href={"https://www.imdb.com/title/" + film.imdb_id} target="_blank">show on IMDB</a>
                    <a href={film.homepage} target="_blank">goto film homepage</a>
                </div>
                <div>
                    <p>TMDB Rating</p>
                    <span className={`tag ${setVoteClass(film.vote_average)}`}>{film.vote_average}</span>
                    <br /> <p>vote count : {film.vote_count}</p>
                </div>

            </div>
            <div className='detail-center'>
                <div><img src={IMG_API + film.poster_path} alt={film.title} /></div>
                <div className='detail-center-cus'>
                    <div className='detail-center-genre'>
                        {film.genres != undefined && film.genres.length > 0 && film.genres.map(genre => (
                            <div>
                                {genre.name}
                            </div>
                        )
                        )}
                    </div>

                    <div className='detail-center-cus-nine'>{film.overview}</div>
                </div>
                <div></div>
            </div>
        </div>

    )

}


export default Detail