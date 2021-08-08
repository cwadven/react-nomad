import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'a4a599b5b19fb6fca6b94df7abe615d0',
        language: 'en-US',
    },
});

export const tvApi = {
    topRated: () => api.get('tv/top_rated'),
    popular: () => api.get('tv/popular'),
    airingToday: () => api.get('tv/airing_today'),
    showDetail: id =>
        api.get(`tv/${id}`, {
            params: { append_to_response: 'videos' },
        }),
    search: term =>
        api.get('search/tv', {
            params: { query: encodeURIComponent(term) },
        }),
    seasonDetail: (tvId, seasonNumber) =>
        api.get(`/tv/${tvId}/season/${seasonNumber}`, {
            params: { append_to_response: 'videos' },
        }),
};

export const movieApi = {
    nowPlaying: () => api.get('movie/now_playing'),
    upComing: () => api.get('movie/upcoming'),
    topRated: () => api.get('movie/top_rated'),
    popular: () => api.get('movie/popular'),
    movieDetail: id =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: 'videos',
            },
        }),
    search: term =>
        api.get('search/movie', {
            params: { query: encodeURIComponent(term) },
        }),
};

export const collectionApi = {
    collectionDetail: id => api.get(`collection/${id}`),
};
