// Import the navigation menu.
import Navbar from "../../components/Navbar";

// Import the form component.
import TaskForm from "../../components/TaskForm";

// Import the status component.
import StatusCard from "../../components/StatusCard";

export default function Features() {
  return (
    <>
      {/* Display the navigation menu. */}
      <Navbar />

      <main className="container">

        <h1>Application Features</h1>

        <p className="page-description">
          Try the interactive features below.
        </p>

        <div className="grid">

          {/* TaskForm manages its own state and form events. */}
          <TaskForm />

          {/* Passing different course names as props
              to the same reusable component. */}
          <StatusCard course="Web Development" />

          <StatusCard course="Programming Fundamentals" />

        </div>

      </main>
    </>
  );
}