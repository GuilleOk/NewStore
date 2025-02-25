import { useContext} from "react"
import { NavLink } from "react-router"
import { LoginContext } from "../contexts/LoginContext"
import { Cart } from "./ModifyAmount"

const Navbar = () => {
  const { usuario, logout } = useContext(LoginContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-mine">
      <img src="/images/LOGO_OK.png" alt="Logo" className="LogoNavbar" />
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded='false' aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ backgroundColor: 'inherit' }}>
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink to='/' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/privacity' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}>Privacy Policy</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='cart' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}><Cart /></NavLink>
            </li>
            <li className={Object.keys(usuario).length === 0 ? "nav-item" : 'd-none'}>
              <NavLink to='login' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}>Login</NavLink>
            </li>
            <li className={Object.keys(usuario).length !== 0 ? "nav-item" : 'd-none'}>
              <button className='inActiveLink' style={{backgroundColor: 'transparent', border: 'none'}} onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar