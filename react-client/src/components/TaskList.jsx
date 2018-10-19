import React from 'react';
import Task from './Task.jsx';

const TaskList = (props) => (
  <div>
    <h4>(stand in for a TaskList)</h4>
    { props.tasks.map(task => <Task task={task}/>)}
  </div>
)

export default TaskList;