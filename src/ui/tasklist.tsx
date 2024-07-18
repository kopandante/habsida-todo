import Task from "@/components/ui/task";

export default function TaskList() {
  const now = new Date();

  const data = [
    {
      completed: true,
      editing: false,
      description: "Completed task",
      created: new Date(now.getTime() - 17 * 1000),
    },
    {
      completed: false,
      editing: true,
      description: "Editing task",
      created: new Date(now.getTime() - 5 * 60 * 1000),
    },
    {
      completed: false,
      editing: false,
      description: "Active task",
      created: new Date(now.getTime() - 5 * 60 * 1000),
    },
  ];

  return (
    <ul className="todo-list">
      {data.map((item, index) => (
        <Task
          key={index}
          completed={item.completed}
          editing={item.editing}
          description={item.description}
          created={item.created}
        />
      ))}
    </ul>
  );
}
