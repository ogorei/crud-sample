import React from 'react';
import { useState } from 'react';
import './App.css';
import {Task} from './components/interfaces/TasksInterface'
import TaskList from './components/TaskList';



const App: React.FC = ()=> {
  const [task, settask] = useState<Task[]>([
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
        <div className="container">
          <a href="/">Home</a>
        </div>
      </nav>
      <h1>TS sample</h1>

      <main className="container p-4">
        <TaskList tasks={task} />
       
      </main>

    </div>
  );
}

export default App;
