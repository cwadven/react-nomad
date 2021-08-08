import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import { Helmet } from 'react-helmet';
import Message from '../../Components/Message';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const ALink = styled.a`
    color: #ffe998;
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

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const OverView = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;

const Collection = styled.div`
    display: flex;
    position: relative;
    width: 300px;
    height: 169px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover:after {
        background-size: 120%;
        opacity: 0.8;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.6;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('${props => props.bgImage}');
        z-index: -1;
        border-radius: 10px;
        transition: 0.2s linear;
    }
`;

const SeasonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const SeasonItem = styled.div`
    display: flex;
    position: relative;
    width: 150px;
    height: 200px;
    margin: 10px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s linear;

    &:hover:after {
        background-size: 120%;
        opacity: 0.8;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.6;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('${props => props.bgImage}');
        z-index: -1;
        border-radius: 10px;
        transition: 0.2s linear;
    }
`;

const ImdbBadge = styled.div`
    display: inline-block;
    background-color: #edbf17;
    color: black;
    padding: 3px;
    width: 50px;
    text-align: center;
    border-radius: 3px;
    font-weight: bold;
    font-size: 14px;
    transition: background-color 0.2s linear;
    &:hover {
        background-color: #ffe998;
    }
`;

const Tab = styled.div`
    display: flex;
    margin-top: 50px;
`;

const TabItem = styled.div`
    padding: 10px 20px;
    margin: 0 5px;
    border-bottom: 2px solid
        ${props => (props.isSelected ? '#edbf17' : '#cccccc')};
    cursor: pointer;
    transition: border-bottom 0.2s linear;
    &:hover {
        border-bottom: 2px solid #ffe998;
    }
`;

const YoutubeVideoContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const YoutubeVideoTitle = styled.div`
    font-size: 20px;
    margin: 20px;
`;

const ProductionCompanyContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const ProductCompany = styled.div`
    position: relative;
    margin: 20px;
    display: flex;
    color: #ffe998;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-align: center;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;

    &:hover:after {
        background-size: 80%;
        opacity: 1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.6;
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('${props => props.logo_path}');
        z-index: -1;
        transition: 0.2s linear;
    }
`;

const ProductionCountryContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const ProductionCountry = styled.div`
    margin: 20px;
    font-size: 20px;
`;

const DetailPresenter = ({
    result,
    loading,
    error,
    tab,
    tabIndex,
    setTabIndex,
}) =>
    loading ? (
        <>
            <Helmet>
                <title>Loading | Nomflix</title>
            </Helmet>
            <Loader />
        </>
    ) : error ? (
        <Message text={error} color="red" />
    ) : (
        <Container>
            <Helmet>
                <title>
                    {result.original_title
                        ? result.original_title
                        : result.original_name}{' '}
                    | Nomflix
                </title>
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
                    <Title>
                        {result.original_title
                            ? result.original_title
                            : result.original_name}
                    </Title>
                    <ItemContainer>
                        <Item>
                            {result.release_date
                                ? result.release_date.substring(0, 4)
                                : result.first_air_date.substring(0, 4)}
                        </Item>
                        <Divider>◾</Divider>
                        <Item>
                            {result.runtime
                                ? result.runtime
                                : result.episode_run_time[0]}{' '}
                            min
                        </Item>
                        <Divider>◾</Divider>
                        <Item>
                            {result.genres &&
                                result.genres.map((genre, index) =>
                                    index === result.genres.length - 1
                                        ? genre.name
                                        : `${genre.name}/`,
                                )}
                        </Item>
                        {result.imdb_id && (
                            <>
                                <Divider>◾</Divider>
                                <a
                                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ImdbBadge>IMDb</ImdbBadge>
                                </a>
                            </>
                        )}
                    </ItemContainer>
                    <OverView>{result.overview}</OverView>
                    {result.belongs_to_collection && (
                        <Collection
                            bgImage={`https://image.tmdb.org/t/p/w300${result.belongs_to_collection.backdrop_path}`}
                            onClick={() => {
                                window.location.href = `/collection/${result.belongs_to_collection.id}`;
                            }}
                        >
                            {result.belongs_to_collection.name}
                        </Collection>
                    )}
                    {result.seasons.length > 0 && (
                        <SeasonWrapper style={{ display: 'flex' }}>
                            {result.seasons.map(season => (
                                <SeasonItem
                                    key={season.id}
                                    bgImage={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                                    onClick={() => {
                                        window.location.href = `/show/${season.id}`;
                                    }}
                                >
                                    {season.name}
                                </SeasonItem>
                            ))}
                        </SeasonWrapper>
                    )}
                    <Tab>
                        {tab.map(item => {
                            return (
                                <TabItem
                                    key={item.id}
                                    isSelected={item.id === tabIndex}
                                    onClick={() => {
                                        setTabIndex(item.id);
                                    }}
                                >
                                    {item.name}
                                </TabItem>
                            );
                        })}
                    </Tab>
                    {tabIndex === 1 && (
                        <YoutubeVideoContent>
                            {result.videos?.results.map(item => {
                                return (
                                    <div key={item.id}>
                                        <YoutubeVideoTitle>
                                            <ALink
                                                href={`https://www.youtube.com/watch?v=${item.key}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {item.name}
                                            </ALink>
                                        </YoutubeVideoTitle>
                                    </div>
                                );
                            })}
                        </YoutubeVideoContent>
                    )}
                    {tabIndex === 2 && (
                        <ProductionCompanyContent>
                            {result.production_companies?.map(item => {
                                return (
                                    <ProductCompany
                                        key={item.id}
                                        logo_path={`https://image.tmdb.org/t/p/w300${item.logo_path}`}
                                        onClick={() => {
                                            window.open(
                                                `https://en.wikipedia.org/wiki/${item.name}`,
                                                '_blank',
                                            );
                                        }}
                                    >
                                        {item.name}
                                    </ProductCompany>
                                );
                            })}
                        </ProductionCompanyContent>
                    )}
                    {tabIndex === 3 && (
                        <ProductionCountryContent>
                            {result.production_countries?.map(item => {
                                return (
                                    <ProductionCountry key={item.iso_3166_1}>
                                        <ALink
                                            href={`https://en.wikipedia.org/wiki/${item.name}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item.name}
                                        </ALink>
                                    </ProductionCountry>
                                );
                            })}
                        </ProductionCountryContent>
                    )}
                </Data>
            </Content>
        </Container>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    tab: PropTypes.array,
    tabIndex: PropTypes.number,
    setTabIndex: PropTypes.func,
};

export default DetailPresenter;
