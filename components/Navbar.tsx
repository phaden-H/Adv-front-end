// Import Link from Next.js for client-side navigation
// between different pages of the application.
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Application title */}
        <h2>Student Dashboard</h2>

        {/* Navigation links allow the user to move between pages. */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/profile">Profile</Link>
        </div>

      </div>
    </nav>
  );
}