import style from "./styles.module.css";

export function Todolist(props) {
  
  return (
    <ul className={style.todolist}>
      <h4>{props.todos.length > 0 ? props.listTitle : <small><i>no todos yet</i></small>}</h4>
      
      {props.todos.map((todo, index) => (
        <>
          <li key={index} className="form-check">
            <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              checked={todo.checked}
              onChange={() => props.onChecked(index)}
            />
            
            <span
              style={{
                textDecoration: todo.checked ? "line-through" : "none",
                color: todo.checked ? "grey" : "#fff",
              }}
            >
              {todo.text}
            </span>
            </label>

            <button
              className={style.tList_danger}
              onClick={() => props.deleteTask(todo.id)}
            >
              Delete
            </button>
          </li>
        </>
      ))}
    </ul>
  );
}
