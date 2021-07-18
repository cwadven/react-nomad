import React from 'react';
import styles from './Header.module.css';

// eslint-disable-next-line react/display-name
export default () => (
    <header>
        <ul className={styles.navList}>
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
