import style from "./InfoTasks.module.css";

interface InforTasksProps {
  infCompletedTaskCounter: number;
  infCreatedTaskCounter: number;
}

export function InforTasks({
  infCompletedTaskCounter,
  infCreatedTaskCounter,
}: InforTasksProps) {
  return (
    <header className={style.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{infCreatedTaskCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {infCreatedTaskCounter === 0
            ? infCreatedTaskCounter
            : `${infCompletedTaskCounter} de ${infCreatedTaskCounter}`}
        </span>
      </aside>
    </header>
  );
}
