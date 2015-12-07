import React from 'react';

export default class Header extends React.Component {
  state = {
    text: ""
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleClick = () => {
    this.props.addItem({
      text: this.state.text,
      done: false
    });
    this.setState({
      text: ""
    });
  }

  render() {
    return <div className="input-group">
      <input type="text"
        value={this.state.text}
        onChange={this.handleInputChange}
        className="form-control" />
      <span className="input-group-btn">
        <button
          className="btn btn-default"
          onClick={this.handleClick}
          type="button">
          Add Todo
        </button>
      </span>
    </div>
  }
}
