import React, {Component} from 'react';
import Rebase from 're-base';

const base = Rebase.createClass('https://sizzling-inferno-3741.firebaseio.com/');

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      textChange: false
    }
    this.originText = this.props.item.text;
  }

  componentDidMount() {
    base.syncState('todoList/' + this.props.item.key, {
      context: this,
      state: 'item'
    });
  }

  handleClickCheckbox = (event) => {
    let newItem = this.state.item;
    newItem.done = !this.state.item.done;
    this.setState({item: newItem});
  }

  handleClickButtton = () => {
    this.props.deleteItem(this.props.index);
  }

  handleTextChange = (event) => {
    let newItem = this.state.item;
    newItem.text = event.target.value;
    this.setState({
      item: newItem,
      textChange: true
    })
  }

  changeButtons() {
    if (!this.state.textChange) {
      return null;
    } else {
      return [
        <button
          onClick={this.handleSaveClick}
          className="btn btn-default">
          Save
        </button>,
        <button
          onClick={this.handleUndoClick}
          className="btn btn-default">
          Undo
        </button>
      ]
    }
  }

  handleUndoClick = () => {
    let newItem = this.state.item;
    newItem.text = this.originText;
    this.setState({
      item: newItem,
      textChange: false
    });
  }

  handleSaveClick = () => {
    this.setState({
      textChange:false
    });
  }

  render() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={this.state.item.done}
          onClick={this.handleClickCheckbox}
          />
      </span>
      <input type="text"
        className="form-control"
        disabled={this.state.item.done}
        value={this.state.item.text}
        onChange={this.handleTextChange}
        />
      <span className="input-group-btn">
        {this.changeButtons()}
        <button className="btn btn-default btn-danger" onClick={this.handleClickButtton}>
          Delete
        </button>
      </span>
    </div>
  }
}

module.exports = TodoItem;
