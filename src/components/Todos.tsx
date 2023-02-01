import Todo from "../models/Todo";
import TodoListItem from "./TodoListItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onDelete: (todoId: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoListItem item={item} key={item.id} onDelete={props.onDelete} />
      ))}
    </ul>
  );
};

export default Todos;
