import React from 'react';
import { useState } from 'react';
import './App.css';
import {Task} from './components/interfaces/TasksInterface'
import TaskCard from './components/TaskCard';
import TaskList from './components/TaskList';


interface Props{
  title?: string
}

export function App ({title}:Props){
  const [tasks, settasks] = useState<Task[]>([
    {
      id:1,
      title: 'learn react',
      status:false,
      description:'practice useState, and other hooks'
    },
    {
      id:2,
      title: 'learn Vue',
      status:false,
      description:'practice useState, and other hooks'
    },
  ])

  return (
    <div className="text-white">
      <nav className='navbar navbar-dark bg-primary'>
        <div className="container ">
          <a className='text-decoration-none' href="/">{title}</a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="col-md-8">
          <TaskList tasks={tasks} />
        </div>
      </main>

    </div>
  );
}

export default App;
