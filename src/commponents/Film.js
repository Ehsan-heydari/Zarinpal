import React from "react";
import { Link } from "react-router-dom";
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
const Film = ({ title, poster_path, overview, vote_average, id, starFilled, onClickHandler }) => {

    return (
        <div className="Film">
            <span className="star" onClick={() => onClickHandler(id)}><i className={getStarStyle(starFilled)} /></span>
            <Link to={"/detail/" + id}><img src={IMG_API + poster_path} alt={title} /></Link>

            <div className="film_info">
                <h3>
                    {title}
                </h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="film_over">
                <h2>overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

function getStarStyle(fill) {
    let prefix = 'fa-star '

    if (fill) {
        return prefix + ' fa-solid'
    }
    else {
        return prefix + ' fa-regular'
    }

}
export default Film;