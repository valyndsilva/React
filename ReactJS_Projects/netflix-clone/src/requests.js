const API_KEY = "83ea259208e95de317b4da7720bc733d";

const requests = {
    fetchRecommended: `discover/movie?api_key=${API_KEY}&with_watch_providers=213&sort_by=popularity.desc`,
    fetchTrending: `discover/movie?api_key=${API_KEY}&with_watch_providers=213&with_genres=18&primary_release_year=2021&certification.lte=G`,
    fetchNetflixMovieOriginals: `discover/movie?api_key=${API_KEY}&with_watch_providers=213`,
    fetchNetflixTvOriginals: `discover/tv?api_key=${API_KEY}&with_watch_providers=213`,
    fetchTvOriginals: `discover/tv?api_key=${API_KEY}&with_watch_providers=213&sort_by=vote_average.desc&vote_count.gte=10`,
    fetchAction: `discover/movie?api_key=${API_KEY}&with_watch_providers=213&with_genres=28`,
    fetchRomance: `discover/movie?api_key=${API_KEY}&with_watch_providers=213&with_genres=10749`,
    fetchComedy: `discover/movie?api_key=${API_KEY}&with_watch_providers=213&with_genres=35`,
}

export default requests;