import React, { Component } from 'react';
import "./widget.css"

class Widget extends Component {
    sendDeleteId(id) {
        this.props.dispatchDeleteId(id)
    }
    makeEditable() {
        this.editHead.contentEditable = true;
    }
    editName(id) {
        this.props.dispatchEditName(id,this.editHead.innerHTML);
    }
    render() {
        return (
            <div className="card mt-2 mb-2 widget">
                <div className="card-header">
                    <span onKeyUp={this.editName.bind(this,this.props.id)} className="p-1" ref={(editHead) => { this.editHead = editHead }} onClick={this.makeEditable.bind(this)}>{this.props.head}</span>
                    <button onClick={this.sendDeleteId.bind(this, this.props.id)} style={{ borderRadius: "100%" }} className="float-right btn btn-sm btn-danger">&#10005;</button>
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
