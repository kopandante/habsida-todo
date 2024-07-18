import NewTaskForm from "@/components/ui/new-task-form";

export default function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm />
    </header>
  );
}
