import { useCallback, useState } from "react";

interface TaskProps {
  completed?: boolean;
  editing?: boolean;
  description: string;
  created: Date;
  onComplete: () => void;
  onDelete: () => void;
  onPressEdit: () => void;
  onEdit: (value: string) => void;
}

const Task: React.FC<TaskProps> = ({
  completed = false,
  editing = false,
  description,
  created,
  onComplete,
  onDelete,
  onPressEdit,
  onEdit,
}) => {
  const TimeOffset = useCallback((date: Date) => {
    const now = new Date();
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    const offset = now.getTime() - date.getTime();
    if (offset <= second) {
      return `just created`;
    } else if (offset >= second && offset < minute) {
      return `created ${~~(offset / second)} seconds ago`;
    } else if (offset >= minute && offset < hour) {
      return `created ${~~(offset / minute)} minutes ago`;
    } else if (offset >= hour && offset < day) {
      return `created ${~~(offset / hour)} hours ago`;
    } else if (offset >= day) {
      return `created ${~~(offset / day)} days ago`;
    }
  }, []);

  const [editValue, setEditValue] = useState(description);

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEdit(editValue);
    }
  };
  return (
    <li
      className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onClick={onComplete}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{TimeOffset(created)}</span>
        </label>
        <button className="icon icon-edit" onClick={onPressEdit}></button>
        <button className="icon icon-destroy" onClick={onDelete}></button>
      </div>
      <input
        type="text"
        className={`${!editing && "hidden"} edit`}
        value={editValue}
        onChangeCapture={handleEditChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};

export default Task;
