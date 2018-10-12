import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from './actions/postactions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            id : Math.random(),
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post)
    }
    render() {
        return (
            <div>
                <h2>Add Post</h2>
                <form className="form-horizontal row" onSubmit={this.onSubmit}>
                    <div className="col-4">
                        <input 
                            type="text" 
                            value={this.state.title} 
                            onChange={this.onChange} 
                            placeholder="title" 
                            name="title" 
                            className="form-control" />
                    </div>
                    <div className="col-4">
                        <input 
                            type="text" 
                            value={this.state.body} 
                            onChange={this.onChange} 
                            placeholder="body" 
                            name="body" 
                            className="form-control" />
                    </div>
                    <div className="col-4">
                        <div className="col-sm-10 col-sm-offset-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);

