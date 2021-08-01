import React, { useEffect, useState, useRef } from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from '../../api';

const DetailContainer = props => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [isMovie, _] = useState(props.location.pathname.includes('/movie/'));

    useEffect(async () => {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = props;
        const parsedId = Number(id);
        if (isNaN(parsedId)) {
            // return 을 하지 않을 경우 밑에 있는 코드까지 실행 된다.
            return push('/');
        }

        console.log(isMovie);

        let result = null;
        try {
            if (isMovie) {
                ({ data: result } = await movieApi.movieDetail(parsedId));
            } else {
                ({ data: result } = await tvApi.showDetail(parsedId));
            }
        } catch (err) {
            setError("Can't find anything.");
        } finally {
            setResult(result);
            setLoading(false);
        }
    }, []);

    return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;
