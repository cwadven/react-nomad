import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from '../../api';

const tabItems = [
    {
        id: 1,
        name: 'YouTube Videos',
        isSelected: true,
        content: '',
    },
    {
        id: 2,
        name: 'Production Company',
        isSelected: false,
        content: '',
    },
    {
        id: 3,
        name: 'Countries',
        isSelected: false,
        content: '',
    },
];

const DetailContainer = props => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [isMovie] = useState(props.location.pathname.includes('/movie/'));

    const [tab] = useState(tabItems);
    const [tabIndex, setTabIndex] = useState(1);

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

        let result = null;
        try {
            if (isMovie) {
                ({ data: result } = await movieApi.movieDetail(parsedId));
                console.log(result);
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

    return (
        <DetailPresenter
            result={result}
            error={error}
            loading={loading}
            tab={tab}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
        />
    );
};

export default DetailContainer;
