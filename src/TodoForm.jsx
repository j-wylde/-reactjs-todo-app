
export const TodoForm = (props) => {

    return (
      <>
        <form className="form-inline">
          <input
            type="text"
            placeholder="Task Name:"
            value={props.inputText}
            onChange={(ev) => props.setInput(ev.target.value)}
          />

          <button
            className="btn btn-warning"
            type="submit"
            onClick={props.handleSubmit}
            >
            {props.btnText}
          </button>
        </form>
      </>
    );
}