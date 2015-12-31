import React, { PropTypes } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import request from 'superagent';

import Box from './box';

import styles from './styles/styles.scss';

const App = React.createClass({
    handleDrop(file) {
        console.log(file);
    },
    render() {
        return (
            <div className="app">
                <Box onDrop={this.handleDrop} />
            </div>
        )
    }
});

export default DragDropContext(HTML5Backend)(App);
