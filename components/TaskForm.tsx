"use client";

import { useState } from "react";

export default function TaskForm() {

  // Stores whatever the user types into the input field.
  const [task, setTask] = useState("");

  // Stores the message that will be displayed after form submission.
  const [message, setMessage] = useState("");

  // This function runs when the form is submitted.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    // Prevent the browser from refreshing the page after submission.
    event.preventDefault();

    // Check whether the user entered an empty task.
    if (task.trim() === "") {
      setMessage("Please enter a task.");
      return;
    }

    // Display a success message when valid input is submitted.
    setMessage(`Task "${task}" has been added successfully!`);

    // Clear the input field after successful submission.
    setTask("");
  };

  return (
    <div className="card">

      <h2>Add a Task</h2>

      {/* The onSubmit event calls handleSubmit when
          the user submits the form. */}
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={task}

          // onChange updates the task state whenever
          // the user types into the input.
          onChange={(event) => setTask(event.target.value)}

          placeholder="Enter a task"
        />

        <button type="submit">
          Add Task
        </button>

      </form>

      {/* Conditional rendering:
          The message only appears if message contains text. */}
      {message && (
        <p className="success-message">
          {message}
        </p>
      )}

    </div>
  );
}