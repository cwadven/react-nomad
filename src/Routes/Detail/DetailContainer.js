import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';

const DetailContainer = props => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
    }, []);

    return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;
