import React, { Component } from 'react';

export default class Box extends Component {
    render() {
        return (
            <div className="box">
                <div className="box-content">
                    <div className="icon">
                        <span className="fa fa-files-o"/>
                    </div>
                    <div className="header">
                        <h1>Drag and drop</h1>
                        <span>a file to upload it to <strong>Pinterest</strong></span>
                    </div>
                </div>
            </div>
        )
    }
}