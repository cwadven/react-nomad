import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { movieApi } from '../../api';

const HomeContainer = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [upcoming, setUpcoming] = useState(null);
    const [popular, setPopular] = useState(null);

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

            setNowPlaying(results_now_playing_set);
            setUpcoming(results_upcoming_set);
            setPopular(results_popular_set);
        } catch (err) {
            setError("Can't find movies informaiton.");
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <HomePresenter
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
        />
    );
};

export default HomeContainer;
