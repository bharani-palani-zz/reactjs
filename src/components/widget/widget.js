import React, { Component } from 'react';
import "./widget.css"

class Widget extends Component {
    sendDeleteId(id) {
        this.props.dispatchDeleteId(id)
    }
    render() {
        return (
            <div className="card mt-2 mb-2 widget">
                <div className="card-header">
                    <button onClick={this.sendDeleteId.bind(this, this.props.id)} style={{ borderRadius: "100%" }} className="float-right btn btn-sm btn-danger">&#10005;</button>
                    <div ref={(editHead) => { this.editHead = editHead }}>{this.props.head}</div>
                    <hr/>
                    <input className="form-control" value={this.props.children} onChange={this.props.dispatchEditName} />
                </div>
                <div className="card-body">{this.props.content}</div>
                <div className="card-footer">
                    <small className="float-right">{this.props.footer}</small>
                </div>
            </div>
        );
    }
}

export default Widget;
