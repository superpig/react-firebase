import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  renderTodoList() {
    if ( this.props.listItems && Object.keys(this.props.listItems).length === 0 ) {
      return <h1>
        Please add a todo first.
      </h1>
    } else {
      let children = [];
      children =  this.props.listItems.map((item, index) => {
        item.key = index;
        return <TodoItem item={item} key={index} />
      });
      return children;
    }
  }

  render() {
    return <div>
      {this.renderTodoList()}
    </div>
  }
}

module.exports = TodoList;
