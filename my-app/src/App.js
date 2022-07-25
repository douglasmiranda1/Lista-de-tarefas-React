import React, { useState } from 'react'
import "./App.css"

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () =>{
  const [tasks, setTasks] = useState ([
    {
      id: '1',
      title: 'Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]
  );

  const handleTaskAddition= (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id:Math.random(10),
      completed:false,

    },
  ];
    setTasks(newTask);
  };
  return (
    <>
    <div className="container" >
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks}/>
      </div>;
    
    </>
  )  
}
export default App;