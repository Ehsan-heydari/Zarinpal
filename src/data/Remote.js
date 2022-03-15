const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
const FIND_API = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US";

export function filmList(onSuccess, onFail) {
    fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
            onSuccess(data.results)
        }).catch((error) => {
            onFail(error)
        })
}

export function filmSearch(query, onSuccess, onFail) {
    fetch(SEARCH_API + query)
        .then((res) => res.json())
        .then((data) => {
            onSuccess(data.results)
        }).catch((error) => {
            onFail(error)
        })

}

export function findFilmById(id, onSuccess, onFail) {
    fetch(FIND_API.replace("{movie_id}", id))
        .then((res) => res.json())
        .then((data) => {
            onSuccess(data)
        }).catch((error) => {
            onFail(error)
        })
}
