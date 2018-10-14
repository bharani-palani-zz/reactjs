import React, { Component } from 'react';

class FormTuts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: \n' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container mt-2 row">
                <div className="col-lg-2 col-sm-2 col-md-2">
                    Essay:
                </div>
                <div className="col-lg-3 col-sm-3 col-md-3  ">
                    <textarea className="form-control" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="col-lg-3 col-sm-3 col-md-3">
                    <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                <div className="col-lg-2 col-sm-2 col-md-2">
                    <input type="submit" className="btn btn-primary btn-block" value="Submit" />
                </div>
            </form>
        );
    }
}

export default FormTuts