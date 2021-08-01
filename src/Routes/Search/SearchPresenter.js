import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';

const Container = styled.div`
    padding: 0px 10px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({
    movieResult,
    tvResult,
    loading,
    error,
    searchTerm,
    handleSubmit,
    updateTerm,
}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search Movies or TV Shows..."
                value={searchTerm}
                onChange={updateTerm}
            />
        </Form>
        {loading ? (
            <Loader />
        ) : (
            <>
                {movieResult && movieResult.length > 0 && (
                    <Section title="Movie Result">
                        {movieResult.map(movie => (
                            <span key={movie.id}>{movie.title}</span>
                        ))}
                    </Section>
                )}
                {tvResult && tvResult.length > 0 && (
                    <Section title="TV Show Result">
                        {tvResult.map(show => (
                            <span key={show.id}>{show.name}</span>
                        ))}
                    </Section>
                )}
                {error && <Message color={'#e74c3c'} text={error} />}
                {tvResult &&
                    tvResult.length === 0 &&
                    movieResult &&
                    movieResult.length === 0 && (
                        <Message color={'#95a5a6'} text={'Nothing Found'} />
                    )}
            </>
        )}
    </Container>
);

SearchPresenter.propTypes = {
    movieResult: PropTypes.array,
    tvResult: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
