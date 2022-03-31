import React from 'react'
import {Task} from "./interfaces/TasksInterface";

interface Props {
  task: Task;
}

export default function TaskCard ({task}: Props) {
  return (
    <div className='card card-body text-center rounded-0'>
        <h2>{task.title}</h2>
        <p>{task.id}</p>
        <p>{task.description}</p>
        <button className='btn btn-danger'>Delete</button>
    </div>
  )
}
