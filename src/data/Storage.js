export function getWatchlistIds() {
    let localWatchString = localStorage.getItem("watchlist") || "[]"
    let localWatch = JSON.parse(localWatchString)
    return localWatch
}



export function changeIdInWatchlist(id) {
    let currentWatchlist = getWatchlistIds()
    if (currentWatchlist.includes(id)) {
        currentWatchlist = arrayRemove(currentWatchlist, id)
    }
    else {
        currentWatchlist.push(id)
    }

    localStorage.setItem("watchlist", JSON.stringify(currentWatchlist))
    return currentWatchlist
}


export function arrayRemove(arr, value) {

    return arr.filter(function (ele) {
        return ele != value;
    });
}