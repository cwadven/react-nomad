import React, { useEffect, useState } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';

const TVContainer = () => {
    const [topRated, setTopRated] = useState(null);
    const [airingToday, setAiringToday] = useState(null);
    const [popular, setPopular] = useState(null);

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

            setTopRated(results_top_rated_set);
            setAiringToday(results_popular_set);
            setPopular(results_airing_today_set);
        } catch (err) {
            setError("Can't find movies informaiton.");
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <TVPresenter
            topRated={topRated}
            airingToday={airingToday}
            popular={popular}
            error={error}
            loading={loading}
        />
    );
};

export default TVContainer;
