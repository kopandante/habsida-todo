import Header from "@/ui/header";
import Footer from "@/ui/footer";
import TaskList from "@/ui/tasklist";

export default function Home() {
  return (
    <main>
      <section className="todoapp">
        <Header />
        <section className="main">
          <TaskList />
          <Footer />
        </section>
      </section>
    </main>
  );
}
