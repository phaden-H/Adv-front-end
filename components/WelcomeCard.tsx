"use client";

// useState allows this component to remember whether
// the welcome message should be displayed.
import { useState } from "react";

// Define the type of data that this component receives through props.
interface WelcomeCardProps {
  studentName: string;
}

export default function WelcomeCard({
  studentName,
}: WelcomeCardProps) {

  // This state controls the visibility of the additional message.
  const [showMessage, setShowMessage] = useState(false);

  // This function is called when the Show/Hide button is clicked.
  const handleToggle = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="card">

      {/* The student's name is received from the parent component through props. */}
      <h2>Welcome, {studentName}!</h2>

      <p>
        Welcome to your student dashboard. Explore the features
        available in this application.
      </p>

      {/* Button click event changes the component's state. */}
      <button onClick={handleToggle}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {/* Conditional rendering:
          The message only appears when showMessage is true. */}
      {showMessage && (
        <p className="success-message">
          Thanks for visiting the dashboard!
        </p>
      )}

    </div>
  );
}