import React, { useState } from 'react';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
    const [now_playing_set, setNowPlayingSet] = useState(null);
    const [upcoming_set, setUpcomingSet] = useState(null);
    const [popular_set, setPopularSet] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <HomePresenter
            now_playing_set={now_playing_set}
            upcoming_set={upcoming_set}
            popular_set={popular_set}
            error={error}
            loading={loading}
        />
    );
};

export default HomeContainer;
