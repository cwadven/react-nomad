import React, { useEffect, useState } from 'react';
import { tvApi } from '../../api';
import SeasonPresenter from './SeasonPresenter';

const SeasonContainer = props => {
    const [season, setSeason] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const {
            match: {
                params: { id, seasonNumber },
            },
        } = props;
        const parsedId = Number(id);
        const parsedSeasonNumber = Number(seasonNumber);

        let result = null;
        try {
            ({ data: result } = await tvApi.seasonDetail(
                parsedId,
                parsedSeasonNumber,
            ));
        } catch (err) {
            setError("Can't find anything.");
        } finally {
            setSeason(result);
            setLoading(false);
        }
    }, []);

    return <SeasonPresenter result={season} loading={loading} error={error} />;
};

export default SeasonContainer;
