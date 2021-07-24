import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';

const SearchContainer = () => {
    const [movie_result_set, setMovieResultSet] = useState(null);
    const [tv_result_set, setTVResultSet] = useState(null);
    const [search_term, setSearchTerm] = useState('');

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <SearchPresenter
            movie_result_set={movie_result_set}
            tv_result_set={tv_result_set}
            search_term={search_term}
            error={error}
            loading={loading}
        />
    );
};

export default SearchContainer;
