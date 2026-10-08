"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Profile() {

  // State controls whether the additional profile
  // information is displayed.
  const [showDetails, setShowDetails] = useState(false);

  // Toggle the visibility of the profile details.
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <Navbar />

      <main className="container">

        <div className="card profile-card">

          <h1>Student Profile</h1>

          <p>
            <strong>Name:</strong> Oluwapelumi Hammed
          </p>

          <p>
            <strong>Program:</strong> Computer Programming and Analysis
          </p>

          {/* Button click changes the showDetails state. */}
          <button onClick={handleToggleDetails}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>

          {/* Conditional rendering:
              these details only appear when showDetails is true. */}
          {showDetails && (
            <div className="details">

              <h3>Additional Information</h3>

              <p>
                This section is conditionally rendered
                based on the component state.
              </p>

              <p>
                The profile page demonstrates another
                interactive React component.
              </p>

            </div>
          )}

        </div>

      </main>
    </>
  );
}