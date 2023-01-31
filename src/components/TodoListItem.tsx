import Todo from "./../models/Todo";
import classes from "./TodoListItem.module.css";

const TodoListItem: React.FC<{ item: Todo }> = (props) => {
  return <li className={classes.item}>{props.item.title}</li>;
};

export default TodoListItem;
