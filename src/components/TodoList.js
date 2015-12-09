import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  renderTodoList() {
    if ( this.props.listItems && Object.keys(this.props.listItems).length === 0 ) {
      return <h1>
        Please add a todo first.
      </h1>
    } else {
      let children = [];
      children =  this.props.listItems.map((item, index) => {
        return <TodoItem item={item} key={index} index={index} deleteItem={this.props.deleteItem} />
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
