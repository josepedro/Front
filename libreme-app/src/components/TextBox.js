import React from "react";

import './TextBox.css'

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit} className="Text-Box">
            <div className="new-information" >
            <input type="text"  class="form-control" placeholder="Digite sua frase" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" class="btn btn-outline-secondary" id="button-addon2" value="Submit" />
            </div>
        </form>
        );
    }
}

  export default TextBox;
