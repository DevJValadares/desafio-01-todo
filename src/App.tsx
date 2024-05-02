import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Task, TaskType } from "./components/Task";
import { NewTask } from "./components/NewTask";

import { useState } from "react";
import { InforTasks } from "./components/InfoTasks";
import { TaskEmpty } from "./components/TaskEmpty";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleCreateNewTask(newTask: TaskType) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: string) {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(taskWithoutDeletedOne);
  }

  function taskStatusUpdate(id: string) {
    const taskWithoutUpdateOne = tasks.filter((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });

    setTasks(taskWithoutUpdateOne);
  }

  const infCompletedTaskCounter = tasks.reduce<TaskType[]>(
    (accumulator, task) => {
      if (task.isDone) {
        accumulator.push(task);
      }
      return accumulator;
    },
    []
  );

  return (
    <div>
      <Header />
      <main>
        <section className={styles.content}>
          <NewTask createNewTask={handleCreateNewTask} />

          <InforTasks
            infCompletedTaskCounter={infCompletedTaskCounter.length}
            infCreatedTaskCounter={tasks.length}
          />
          {tasks.length === 0 ? (
            <TaskEmpty />
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onTaskStatusUpdate={taskStatusUpdate}
                />
              );
            })
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
