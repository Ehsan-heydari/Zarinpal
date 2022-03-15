import React, { useEffect, useState } from 'react';
import './../index.css'
import { filmSearch, filmList } from '../data/Remote';
import { changeIdInWatchlist, getWatchlistIds } from '../data/Storage';
import Film from './../commponents/Film';
import { Link } from 'react-router-dom'

function App() {
  const [watchlist, setWatchlist] = useState(getWatchlistIds())

  const saveWatchlist = (id) => {
    let localWatch = changeIdInWatchlist(id)
    setWatchlist((prev) => [...localWatch])
  }
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    filmList((films) => (setFilms(films)), (error) => (console.log(error)))
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      filmSearch(searchTerm, (films) => (setFilms(films)))
      setSearchTerm('');
    }
  }
  const HandleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <div className='head'>
          <div>
            <form onSubmit={HandleSubmit}>
              <input className='search' type="search" placeholder='Search....' value={searchTerm} onChange={HandleOnChange} />
            </form>
          </div>
          <div>
            <Link to="/watchlist">
              <button className='go-to-watch'>go to watchlist {watchlist.length}</button>
            </Link>
          </div>
        </div>
      </header>
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
              onClickHandler={saveWatchlist}
            />
          )
        })}
      </div>
    </>
  )
}

export default App;
