import React, { useEffect, useState } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';

const TVContainer = () => {
    const [top_rated_set, setTopRatedSet] = useState(null);
    const [airing_today_set, setAiringTodaySet] = useState(null);
    const [popular_set, setPopularSet] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        try {
            const {
                data: { results: results_top_rated_set },
            } = await tvApi.topRated();
            const {
                data: { results: results_popular_set },
            } = await tvApi.popular();
            const {
                data: { results: results_airing_today_set },
            } = await tvApi.airingToday();

            setTopRatedSet(results_top_rated_set);
            setAiringTodaySet(results_popular_set);
            setPopularSet(results_airing_today_set);
        } catch (err) {
            setError("Can't find movies informaiton.");
        } finally {
            setLoading(false);
        }
    }, []);

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
