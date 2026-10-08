// Import the navigation component.
import Navbar from "../components/Navbar";

// Import the welcome component.
import WelcomeCard from "../components/WelcomeCard";

export default function Home() {
  return (
    <>
      {/* Navigation menu appears at the top of the page. */}
      <Navbar />

      <main className="container">

        {/* Main welcome section of the application. */}
        <section className="hero">

          <h1>
            Welcome to My Student Dashboard
          </h1>

          <p>
            A React and Next.js application demonstrating
            components, state, props, event handling,
            and conditional rendering.
          </p>

        </section>

        {/* Passing "Student" to WelcomeCard as a prop.
            The WelcomeCard component receives it as studentName. */}
        <WelcomeCard studentName="Student" />

      </main>
    </>
  );
}