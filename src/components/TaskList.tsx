import React from 'react'
import {Task} from './interfaces/TasksInterface'
import TaskCard from './TaskCard';

interface Props {
    tasks: Task[]

}

export default function TaskList({tasks}: Props){
  return (
      <>
       {tasks.map((item,i)=> (
         <TaskCard task={item} key={i} />
       ))}
      </>
      )
}