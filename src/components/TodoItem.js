import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.item.text
    }
  }

  render() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox" />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.text}
        />
      <span className="input-group-btn">
        <button className="btn btn-default btn-danger">
          Delete
        </button>
      </span>
    </div>
  }
}

module.exports = TodoItem;
