import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import classNames from 'classnames';

const target = {
    drop(props, monitor) {
        props.onDrop(monitor.getItem());
    }
};

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
});

const Box = React.createClass({
    propTypes: {
        onDrop: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired
    },
    render() {
        const { isOver, canDrop, connectDropTarget } = this.props;
        const isActive = isOver && canDrop;

        let classes = classNames('box', {
            'active': isActive
        });

        return connectDropTarget(
            <div className={classes}>
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
        );
    }
});

export default DropTarget(NativeTypes.FILE, target, collect)(Box);