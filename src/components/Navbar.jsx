import { useContext, useRef} from "react"
import { NavLink } from "react-router"
import { LoginContext } from "../contexts/LoginContext"
import { Cart } from "./ModifyAmount"
import { Collapse } from "bootstrap" // Importar el componente Collapse de Bootstrap

const Navbar = () => {
  const { usuario, logout } = useContext(LoginContext)
  const navbarCollapse = useRef(null) // Referencia para el elemento colapsable
  
  const handleCollapse = () => {
    if (navbarCollapse.current && window.innerWidth < 992) { // 992px es el breakpoint LG de Bootstrap
      const bsCollapse = new Collapse(navbarCollapse.current, { toggle: false })
      bsCollapse.hide()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-mine">
      <img src="/images/LOGO_OK.png" alt="Logo" className="LogoNavbar" />
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded='false' aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={navbarCollapse} className="collapse navbar-collapse" id="navbarNav" style={{ backgroundColor: 'inherit' }}>
          <ul className="navbar-nav gap-3">
            <li className="nav-item" onClick={handleCollapse}>
              <NavLink to='/' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}>Home</NavLink>
            </li>
            <li className="nav-item" onClick={handleCollapse}>
              <NavLink to='/about' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}>About Us</NavLink>
            </li>
            <li className="nav-item" onClick={handleCollapse}>
              <NavLink to='/privacity' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}>Privacy Policy</NavLink>
            </li>
            <li className="nav-item" onClick={handleCollapse}>
              <NavLink to='cart' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}><Cart /></NavLink>
            </li>
            <li className={Object.keys(usuario).length === 0 ? "nav-item" : 'd-none'} onClick={handleCollapse}>
              <NavLink to='login' className={({ isActive }) => isActive ? 'activeLink' : 'inActiveLink'}>Login</NavLink>
            </li>
            <li className={Object.keys(usuario).length !== 0 ? "nav-item" : 'd-none'} onClick={handleCollapse}>
              <button className='inActiveLink' style={{backgroundColor: 'transparent', border: 'none'}} onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar