import Todo from "./../models/Todo";
import classes from "./TodoListItem.module.css";

const TodoListItem: React.FC<{
  item: Todo;
  onDelete: (todoId: string) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={() => props.onDelete(props.item.id)}>
      {props.item.title}
    </li>
  );
};

export default TodoListItem;
