import React from 'react';
import './Header.css';

// eslint-disable-next-line react/display-name
export default () => (
    <header className={'nav'}>
        <ul>
            <li>
                <a href={'/'}>Movies</a>
            </li>
            <li>
                <a href={'/tv'}>TV</a>
            </li>
            <li>
                <a href={'/search'}>Search</a>
            </li>
        </ul>
    </header>
);
