const API_KEY = "83ea259208e95de317b4da7720bc733d";

const requests = {
    fetchRecommended: `discover/movie?api_key=${API_KEY}&with_watch_providers=337&watch_region=GB&&sort_by=popularity.desc`,
    fetchDisneyTrending: `discover/movie?api_key=${API_KEY}&with_watch_providers=337&watch_region=GB&with_genres=18&primary_release_year=2021&certification.lte=G`,
    fetchDisneyMovieOriginals: `discover/movie?api_key=${API_KEY}&with_watch_providers=337&watch_region=GB&sort_by=vote_average.desc&vote_count.gte=10`,
    fetchDisneyTvOriginals: `discover/tv?api_key=${API_KEY}&with_watch_providers=337&watch_region=GB&sort_by=vote_average.desc&vote_count.gte=10`,
    fetchDisneyAction: `discover/movie?api_key=${API_KEY}&with_watch_providers=337&watch_region=GB&with_genres=28`,
    fetchDisneyRomance: `discover/movie?api_key=${API_KEY}&with_watch_providers=337&watch_region=GB&with_genres=10749`,
    fetchDisneyComedy: `discover/movie?api_key=${API_KEY}&with_watch_providers=337&watch_region=GB&with_genres=35`,
    fetchDisneyDocumentaries: `discover/movie?api_key=${API_KEY}&with_watch_providers=337&watch_region=GB&with_genres=99`,
    
    
}

export default requests;