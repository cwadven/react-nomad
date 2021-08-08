import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    font-size: 12px;
    height: 180px;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

// 다른 태그도 접근할 수 있다.
const ImageContainer = styled.div`
    position: relative;
    margin-bottom: 5px;
    &:hover {
        ${Image} {
            opacity: 0.4;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    font-size: 12px;
    margin-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const Episode = ({ imageUrl, title, rating, air_date, episodeNumber }) => (
    <Container>
        <ImageContainer>
            <Image
                bgUrl={
                    imageUrl
                        ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                        : require('../assets/no_image.png').default
                }
            />
            <Rating>
                <span role="img" aria-label="rating">
                    ⭐
                </span>{' '}
                {rating}/10
            </Rating>
        </ImageContainer>
        <Title>
            EP {episodeNumber} : {title}
        </Title>
        <Year>{air_date}</Year>
    </Container>
);

Episode.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    air_date: PropTypes.string,
    episodeNumber: PropTypes.number,
};

export default Episode;
