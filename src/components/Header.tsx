import style from "./Header.module.css";

import logoTodo from "../assets/logo-todo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logoTodo} alt="Logotipo" />
    </header>
  );
}
