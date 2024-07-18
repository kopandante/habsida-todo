interface TaskProps {
  completed?: boolean;
  editing?: boolean;
  description: string;
  created: Date;
}

const Task: React.FC<TaskProps> = ({
  completed = false,
  editing = false,
  description,
  created,
}) => {
  const TimeOffset = (date: Date) => {
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
  };

  return (
    <li
      className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}
    >
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">{TimeOffset(created)}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {editing && <input type="text" className="edit" value={description} />}
    </li>
  );
};

export default Task;
