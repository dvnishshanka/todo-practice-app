import Todo from "../models/Todo";
import TodoListItem from "./TodoListItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoListItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
