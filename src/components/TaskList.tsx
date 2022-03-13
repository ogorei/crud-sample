import React from 'react'
import {Task} from './interfaces/TasksInterface'

interface Props {
    tasks: Task[]

}

export default function TaskList({tasks}: Props){
  return (
      <>
    {tasks.map((item,key)=>(
        <ul key={key}>
          <li >{item.title}</li>
        </ul>
        
      ))}
      </>
  )
}