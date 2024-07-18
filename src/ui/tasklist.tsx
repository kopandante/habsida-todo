"use client";

import { useState } from "react";
import Task from "@/components/ui/task";

export default function TaskList() {
  const now = new Date();

  const [tasks, setTasks] = useState([
    {
      id: 1,
      completed: true,
      editing: false,
      description: "Completed task",
      created: new Date(now.getTime() - 17 * 1000),
    },
    {
      id: 2,
      completed: false,
      editing: true,
      description: "Editing task",
      created: new Date(now.getTime() - 5 * 60 * 1000),
    },
    {
      id: 3,
      completed: false,
      editing: false,
      description: "Active task",
      created: new Date(now.getTime() - 5 * 60 * 1000),
    },
  ]);

  const handleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handlePressEdit = (id: number) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, editing: true } : task))
    );
  };

  const handleEdit = (id: number, value: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: value, editing: false } : task
      )
    );
  };

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          completed={task.completed}
          editing={task.editing}
          description={task.description}
          created={task.created}
          onComplete={() => handleComplete(task.id)}
          onDelete={() => handleDelete(task.id)}
          onPressEdit={() => handlePressEdit(task.id)}
          onEdit={(value) => handleEdit(task.id, value)}
        />
      ))}
    </ul>
  );
}
