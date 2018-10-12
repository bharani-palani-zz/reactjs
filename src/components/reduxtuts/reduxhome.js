import React, { Component } from 'react';
import ReduxTuts from './reduxtuts';
import PostForm from './postform';

class ReduxHome extends Component {
    render() {
        return (
            <div className="container">
                <PostForm />
                <ReduxTuts />
            </div>
        )
    }

}

export default ReduxHome;