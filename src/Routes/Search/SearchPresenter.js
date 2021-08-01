import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 20px;
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
                            <Poster
                                id={movie.id}
                                key={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={
                                    movie.release_date &&
                                    movie.release_date.substring(0, 4)
                                }
                                isMovie
                            />
                        ))}
                    </Section>
                )}
                {tvResult && tvResult.length > 0 && (
                    <Section title="TV Show Result">
                        {tvResult.map(show => (
                            <Poster
                                id={show.id}
                                key={show.id}
                                title={show.original_name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={
                                    show.first_air_date &&
                                    show.first_air_date.substring(0, 4)
                                }
                            />
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
