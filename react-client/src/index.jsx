import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import TaskList from './components/TaskList.jsx';

let url = 'localhost:3000'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: ['alpha', 'bravo', 'charlie', 'delta']
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/tasks', 
      success: (data) => {
        console.log('componenet did mount');
        // this.setState({
        //   tasks: data
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <form>
        <input type="text" name="New Task"></input>
        <input type="submit" value="Create New Task"></input>
      </form>
      <TaskList tasks={this.state.tasks}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));