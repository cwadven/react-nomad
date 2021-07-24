import React, { useState } from 'react';
import DetailPresenter from './DetailPresenter';

const DetailContainer = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;
