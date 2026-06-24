import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <h1>Ad Astra UC3M</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/sponsors">Sponsors</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/join">Join</NavLink></li>
      </ul>
    </nav>
  );
}
