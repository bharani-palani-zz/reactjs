import React, { Component } from 'react';

class Form extends Component {
    saveNewUser() {
        var newSaveObj = {
            id: Math.random(),
            head: this.head.value,
            content: this.content.value,
            footer: this.footer.value,
        }
        this.props.sendNewObj(newSaveObj);
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" ref={(head) => { this.head = head }} placeholder="Head" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" ref={(content) => { this.content = content }} placeholder="content" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" ref={(footer) => { this.footer = footer }} placeholder="footer" />
                </div>
                <div className="col">
                    <button type="button" onClick={this.saveNewUser.bind(this)} className="btn btn-block btn-sm btn-warning">Submit</button>
                </div>
            </div>
        );
    }
}

export default Form;
