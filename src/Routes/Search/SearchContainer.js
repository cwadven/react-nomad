import React, { useEffect, useState } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from '../../api';

const SearchContainer = () => {
    const [movie_result_set, setMovieResultSet] = useState(null);
    const [tv_result_set, setTVResultSet] = useState(null);
    const [search_term, setSearchTerm] = useState('');

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (search_term !== '') {
            try {
                setLoading(true);

                const {
                    data: { results: results_movie_result_set },
                } = await movieApi.search(search_term);
                const {
                    data: { results: results_tv_result_set },
                } = await tvApi.search(search_term);

                setMovieResultSet(results_movie_result_set);
                setTVResultSet(results_tv_result_set);
            } catch (err) {
                setError("Can't find results.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <SearchPresenter
            movie_result_set={movie_result_set}
            tv_result_set={tv_result_set}
            search_term={search_term}
            error={error}
            loading={loading}
            handleSubmit={handleSubmit}
        />
    );
};

export default SearchContainer;
