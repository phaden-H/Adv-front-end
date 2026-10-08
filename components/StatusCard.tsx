"use client";

import { useState } from "react";

// Define the props that this component expects.
interface StatusCardProps {
  course: string;
}

export default function StatusCard({
  course,
}: StatusCardProps) {

  // Store whether the course is currently active.
  const [isActive, setIsActive] = useState(true);

  // Toggle the course between active and inactive.
  const handleStatusChange = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="card">

      {/* The course name comes from the parent component through props. */}
      <h2>{course}</h2>

      <p>
        Status:{" "}

        {/* Conditional rendering using the ternary operator. */}
        <strong>
          {isActive ? "Currently Active" : "Currently Inactive"}
        </strong>
      </p>

      {/* Clicking this button changes the isActive state. */}
      <button onClick={handleStatusChange}>
        {isActive ? "Set Inactive" : "Set Active"}
      </button>

      {/* Display different content depending on the current state. */}
      {isActive ? (
        <p className="status-active">
          You are currently working on this course.
        </p>
      ) : (
        <p className="status-inactive">
          This course is currently inactive.
        </p>
      )}

    </div>
  );
}