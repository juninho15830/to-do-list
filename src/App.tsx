import { useState } from "react";
import styles from "./App.module.css"
import { Header } from "./components/Header";
import { HeaderTasks } from "./components/TasksComponents/HeaderTasks";
import { Task } from "./components/TasksComponents/Task";

import "./global.css"
import { Empty } from "./components/TasksComponents/Empty";
import { Form } from "./components/Form";

//Cria a interface para passar as props direto no estado
interface Task {
  id: string;
  isChecked: boolean;
  content: string;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>/*Passando as props pro estado*/([])

  function onTaskCreate(content: string) {
    const newTask = {
      id: crypto.randomUUID(),
      content,
      isChecked: false,
    }

    setTasks([...tasks, newTask])
  }

  function handleToggleTask(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );
    setTasks(updatedTasks);
  }

  function onTaskDelete(id: string) {
    const tasksList = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(tasksList)
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isChecked).length;
  
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <Form onTaskCreate={onTaskCreate}/>
          <section>
            <HeaderTasks totalTasks={totalTasks} completedTasks={completedTasks}/>
            {tasks.length > 0 ? (
              <div>
                {tasks.map(task => {
                  return( 
                    <Task 
                      key={task.id} 
                      task={task} 
                      onTaskDelete={onTaskDelete}
                      onToggleTask={handleToggleTask} 
                    />
                  )
                })}
              </div>
            ) : (
              <Empty />
            )}
          </section>
        </div>
      </main>
    </>
  )
}
