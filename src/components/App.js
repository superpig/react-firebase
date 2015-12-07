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
      asArray: true
    });
    base.listenTo('value', {
      context: this,
      asArray: true,
      then(data) {
        this.setState({ loaded: true });
      }
    })
  }

  handleAddItem = (newItem) => {
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }

  render() {
    return <div className="container">
      <div className="row panel panel-default">
          <h2 className="text-center">
            To-Do List
          </h2>
          <Header addItem={this.handleAddItem} />
          <hr />
          <div className={"content" + (this.state.loaded ? " loaded" : "") }>
            <TodoList listItems={this.state.list} />
          </div>
      </div>
    </div>
  }
};
