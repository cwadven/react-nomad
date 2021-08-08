import React, { useEffect, useState } from 'react';
import CollectionPresenter from './CollectionPresenter';
import { collectionApi } from '../../api';

const CollectionContainer = props => {
    const [collection, setCollection] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const {
            match: {
                params: { id },
            },
        } = props;
        const parsedId = Number(id);

        let result = null;
        try {
            ({ data: result } = await collectionApi.collectionDetail(parsedId));
        } catch (err) {
            setError("Can't find anything.");
        } finally {
            setCollection(result);
            setLoading(false);
        }
    }, []);

    return (
        <CollectionPresenter
            result={collection}
            loading={loading}
            error={error}
        />
    );
};

export default CollectionContainer;
