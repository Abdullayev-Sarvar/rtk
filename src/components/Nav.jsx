import { NavLink } from 'react-router-dom'
import Container from "../container/Container";

const Nav = () => {
  return (
    <Container>
      <div className="bg-black p-4 shadow-lg rounded-lg">
        <ul className="flex justify-between items-center space-x-8">
          <li className="hover:scale-110 transform transition duration-300">
            <NavLink to="/" className="text-white text-lg font-semibold hover: transition-colors duration-300">
              Products
            </NavLink>
          </li>
          <li className="hover:scale-110 transform transition duration-300">
            <NavLink to="/login" className="text-white text-lg font-semibold hover: transition-colors duration-300">
              Login
            </NavLink>
          </li>
          <li className="hover:scale-110 transform transition duration-300">
            <NavLink to="/cart" className="text-white text-lg font-semibold flex items-center space-x-2">
              <span>Cart</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Nav