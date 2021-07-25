import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { movieApi } from '../../api';

const HomeContainer = () => {
    const [now_playing_set, setNowPlayingSet] = useState(null);
    const [upcoming_set, setUpcomingSet] = useState(null);
    const [popular_set, setPopularSet] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        try {
            const {
                data: { results: results_now_playing_set },
            } = await movieApi.nowPlaying();
            const {
                data: { results: results_upcoming_set },
            } = await movieApi.upComing();
            const {
                data: { results: results_popular_set },
            } = await movieApi.popular();

            setNowPlayingSet(results_now_playing_set);
            setUpcomingSet(results_upcoming_set);
            setPopularSet(results_popular_set);
        } catch (err) {
            setError("Can't find movies informaiton.");
        } finally {
            setLoading(false);
        }
    }, []);

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
