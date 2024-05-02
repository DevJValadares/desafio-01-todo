import { Check, Trash } from "phosphor-react";
import style from "./Task.module.css";

export interface TaskType {
  id?: string;
  title: string;
  isDone: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: string) => void;
  onTaskStatusUpdate: (id: string) => void;
}

export function Task({ task, onDeleteTask, onTaskStatusUpdate }: TaskProps) {
  const checkBoxClassName = task.isDone
    ? style["checkbox-checked"]
    : style["checkbox-unchecked"];

  const textLineThrough = task.isDone
    ? style["task-is-done"]
    : style["task-is-not-done"];

  function handleTaskToggle() {
    onTaskStatusUpdate(task.id!);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id!);
  }

  return (
    <div className={style.task}>
      <label htmlFor="checkBox" onClick={handleTaskToggle}>
        {task.isDone ? (
          <Check className={`${style.checkbox} ${checkBoxClassName}`} />
        ) : (
          <input
            className={`${style.checkbox} ${checkBoxClassName}`}
            readOnly
            type="checkbox"
          />
        )}
        <p className={`${textLineThrough}`}>{task.title}</p>
      </label>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
