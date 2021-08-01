import React, { useEffect, useState } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from '../../api';

const SearchContainer = () => {
    const [movieResult, setMovieResult] = useState(null);
    const [tvResult, setTVResult] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const searchByTerm = async () => {
        setLoading(true);
        try {
            const {
                data: { results: results_movie_result_set },
            } = await movieApi.search(searchTerm);
            const {
                data: { results: results_tv_result_set },
            } = await tvApi.search(searchTerm);

            setMovieResult(results_movie_result_set);
            setTVResult(results_tv_result_set);
        } catch (err) {
            setError("Can't find results.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (searchTerm !== '') {
            searchByTerm();
        }
    };

    const updateTerm = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <SearchPresenter
            movieResult={movieResult}
            tvResult={tvResult}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit={handleSubmit}
            updateTerm={updateTerm}
        />
    );
};

export default SearchContainer;
