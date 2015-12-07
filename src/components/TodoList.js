import React, {Component} from 'react';

class TodoList extends Component {
  renderTodoList() {
    if ( this.props.listItems && Object.keys(this.props.listItems).length === 0 ) {
      return <h1>
        Please add a todo first.
      </h1>
    } else {
      let children = [];
      children =  this.props.listItems.map(function(item) {
        return <li>
          {item.text}
        </li>
      });
      return children;
    }
  }

  render() {
    return <ul>
      {this.renderTodoList()}
    </ul>
  }
}

module.exports = TodoList;
