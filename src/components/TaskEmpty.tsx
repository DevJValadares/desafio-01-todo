import { ClipboardText } from "phosphor-react";
import style from "./TaskEmpty.module.css";

export function TaskEmpty() {
  return (
    <div className={style[`task-empty`]}>
      <ClipboardText className={style[`task-empty-icon`]} size={32} />
      <p className={style[`task-empty-paragraph-one`]}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
