import React from 'react';
import { useState } from 'react';
import './App.css';
import {Task} from './components/interfaces/TasksInterface'
import TaskCard from './components/TaskCard';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';



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
    <div className="text-black">
      <nav className='navbar navbar-light bg-black'>
        <div className="container ">
          <a className='text-decoration-none text-white' href="/">{title}</a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-8">
            <div className="col-md-10">
              <TaskForm />
            </div>
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
