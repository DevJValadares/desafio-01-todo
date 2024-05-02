import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";

import style from "./NewTask.module.css";
import { TaskType } from "./Task";
import { ChangeEvent, InvalidEvent, useState } from "react";

interface NewTaskProps {
  createNewTask: (task: TaskType) => void;
}

export function NewTask({ createNewTask }: NewTaskProps) {
  const [newtask, setNewTask] = useState("");

  function handleCreateNewTask() {
    const task: TaskType = {
      id: uuidv4(),
      title: newtask,
      isDone: false,
    };

    createNewTask(task);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Campo obrigatório");
  }

  return (
    <div className={style[`new-task`]}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newtask}
        onInvalid={handleNewTaskInvalid}
        onChange={handleNewTaskChange}
        required
      />
      <button type="button" onClick={handleCreateNewTask}>
        Criar
        <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </button>
    </div>
  );
}
