import React, { Component } from 'react';

import Box from './box';

import styles from './styles/styles.scss';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Box />
            </div>
        )
    }
}