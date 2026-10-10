import { NavLink } from "react-router"
import "./Navbar.css"

export function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Start
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Dashboard
      </NavLink>
    </nav>
  )
}