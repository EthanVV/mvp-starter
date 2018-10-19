import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import TaskList from './components/TaskList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: ['alpha', 'bravo', 'charlie', 'delta'],
      items: [] // remove this when tasks implemented
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <button type="button">Create New Sprint</button>
      <button type="button"></button>
      <List items={this.state.items}/>
      <TaskList tasks={this.state.tasks}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));