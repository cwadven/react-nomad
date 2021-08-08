import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 20px;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const OverView = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
    margin-bottom: 30px;
`;

const CollectionPresenter = ({ result, loading }) =>
    loading ? (
        <>
            <Helmet>
                <title>Loading | Nomflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>{`${result.name} | Nomflix`}</title>
            </Helmet>
            <Backdrop
                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require('../../assets/no_image.png')
                    }
                />
                <Data>
                    <Title>{result.name}</Title>
                    <OverView>{result.overview}</OverView>
                    {result.parts.length > 0 && (
                        <Section title="Collections">
                            {result.parts.map(part => (
                                <Poster
                                    id={part.id}
                                    key={part.id}
                                    title={part.original_title}
                                    imageUrl={part.poster_path}
                                    rating={part.vote_average}
                                    year={
                                        part.release_date &&
                                        part.release_date.substring(0, 4)
                                    }
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}
                </Data>
            </Content>
        </Container>
    );
export default CollectionPresenter;
