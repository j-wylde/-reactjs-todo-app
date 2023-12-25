import { useState, useEffect } from "react";
import style from "./styles.module.css";
import { TodoForm } from "./TodoForm";
import { Todolist } from "./Todolist";

const TodoApp = (props) => {
  const [inputText, setInput] = useState("");
  const [todos, setTodos] = useState(()=>{
    if(sessionStorage.getItem("task") == null) return []
    return JSON.parse(sessionStorage.getItem("task"));
  });

  useEffect(()=>{
    sessionStorage.setItem("task", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(evn) {
    evn.preventDefault();
    if (inputText.trim() !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          checked: false,
          id: todos == 0 ? 1 : todos[todos.length - 1].id + 1,
        },
      ]);
    }
    setInput("");
  }

  function onChecked(index) {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div className={style.app_container}>
        <h1 style={{ textAlign: "center" }}>{props.title}</h1>

        {/*Form*/}
        <TodoForm
          inputText={inputText}
          setInput={setInput}
          handleSubmit={handleSubmit}
          btnText={props.btnText}
        />
        {/*form*/}

        {/*TodoList Render*/}
          <Todolist
            todos={todos}
            listTitle={<i>..Things to do</i>}
            onChecked={onChecked}
            deleteTask={deleteTask}
          />
      </div>
    </>
  );
};

export default TodoApp;
