import React, { Component } from 'react';
import axios from 'axios';

class Features extends Component {
    state = {
        stories: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({ stories: res.data });
            });
    }
    myfunc(e) {
        alert(e)
    }
    render() {
        return (
            <div className="container mt-5 mb-5">
                <ul className="list-group">
                    {this.state.stories.map(story =>
                        <li onClick={this.myfunc.bind(this, story.id)} className="list-group-item" key={story.id}>{story.userId} / {story.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Features;
