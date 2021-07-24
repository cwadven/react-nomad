import React, { useState } from 'react';
import TVPresenter from './TVPresenter';

const TVContainer = () => {
    const [top_rated_set, setTopRatedSet] = useState(null);
    const [airing_today_set, setAiringTodaySet] = useState(null);
    const [popular_set, setPopularSet] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <TVPresenter
            top_rated_set={top_rated_set}
            airing_today_set={airing_today_set}
            popular_set={popular_set}
            error={error}
            loading={loading}
        />
    );
};

export default TVContainer;
