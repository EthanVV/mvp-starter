import React from 'react';
import Task from './Task.jsx';

const TaskList = (props) => (
  <div>
    { props.tasks.map(task => <Task task={task}/>)}
  </div>
)

export default TaskList;