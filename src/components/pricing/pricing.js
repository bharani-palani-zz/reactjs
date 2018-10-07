import React, { Component } from 'react';
import Widget from '../widget/widget';
import Form from '../form/form';

class Pricing extends Component {

    state = {
        widgets: [
            { id:Math.random(), head: "Bharani", content: "9884856788", footer: "https://bharani.com" },
            { id:Math.random(), head: "Uday", content: "9840198998", footer: "https://uday.com" },
            { id:Math.random(), head: "Rekha", content: "9840115711", footer: "https://rekha.com" },
        ]
    }
    dispatchNewUser(obj) {
        var newArray = Object.assign([],this.state.widgets);
        newArray.push(obj);
        this.setState({
            widgets: newArray
        })
    }
    deleteUser(id) {
        this.setState({
            widgets: this.state.widgets.filter(widget => widget.id !== id)
        })
    }
    editUser(id,e){
        const index = this.state.widgets.findIndex((widget) => {return widget.id === id})
        const widget = Object.assign({},this.state.widgets[index]);
        widget.head = e.target.value;
        const widgets = Object.assign({}, this.state.widgets)
        widgets[index] = widget;
        console.log(Array.isArray(this.state.widgets))
        this.setState({
            widgets: widgets
        });
    }
    render() {
        return (
            <div className="container">
                <div className="mt-4">
                    <Form sendNewObj={this.dispatchNewUser.bind(this)} />
                </div>
                <div className="row mt-2">
                    {Array.isArray(this.state.widgets) && this.state.widgets.map((widget, i) => 
                        <div key={i} className="col-sm-6 col-md-3 col-lg-3">
                            <Widget 
                                dispatchEditName={this.editUser.bind(this,widget.id)}
                                dispatchDeleteId={this.deleteUser.bind(this)}
                                id={widget.id}
                                head={widget.head} 
                                content={widget.content} 
                                footer={widget.footer} 
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Pricing;
