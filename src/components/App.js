import React  from 'react';
import ReactDOM from 'react-dom';
import Rebase from 're-base';
import Header from './Header';
import TodoList from './TodoList';

const base = Rebase.createClass('https://sizzling-inferno-3741.firebaseio.com/');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loaded: false
    }
  }

  componentDidMount() {
    base.syncState('todoList', {
      context: this,
      state: 'list',
      asArray: true,
      then() {
        this.setState({ loaded: true });
      }
    })
  }

  handleAddItem = (newItem) => {
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }

  handleDeleteItem = (index) => {
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
  }

  deleteButtons() {
    if (!this.state.loaded) {
      return null;
    } else {
      return <div className="text-center clear-complete">
        <hr />
        <button
          type="button"
          onClick={this.handleDeleteAllDone}
          className="btn btn-info">
          Clear Complete
        </button>
      </div>
    }
  }

  handleDeleteAllDone = () => {
    var newList = this.state.list.filter((item)=> {
      return item.done ? "" : item;
    })
    console.log(newList);
    this.setState({
      list: newList
    });
  }

  render() {
    return <div className="container">
      <div className="row panel panel-default">
        <h1 className="text-center">
          To-Do List
        </h1>
        <Header addItem={this.handleAddItem} />
        <hr />
        <div className={"content" + (this.state.loaded ? " loaded" : "") }>
          <TodoList
            listItems={this.state.list}
            deleteItem={this.handleDeleteItem}
            />
          {this.deleteButtons()}
        </div>
      </div>
    </div>
  }
};
