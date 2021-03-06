import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
    <>
        <Helmet>
            <title>Movies | Nomflix</title>
        </Helmet>
        {loading ? (
            <Loader />
        ) : (
            <Container>
                {upcoming && upcoming.length > 0 && (
                    <Section title="Upcoming Movies">
                        {upcoming.map(movie => (
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

                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing Movies">
                        {nowPlaying.map(movie => (
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

                {popular && popular.length > 0 && (
                    <Section title="Popular Movies">
                        {popular.map(movie => (
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

                {error && <Message color={'#e74c3c'} text={error} />}
            </Container>
        )}
    </>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default HomePresenter;
