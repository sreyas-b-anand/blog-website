
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  const heading = "Blogo";
  return (
    <>
      <div>
        <div className="navbar navbar-expand-lg bg-body-tertiary">
        <h1 id="h1" className="container">
          {heading}  </h1>
          <div id='line' className="nav justify-content-end">
            <Link className="navbar" to="/" >Home</Link>
            <Link className="navbar" to="/new">New</Link>
            
          </div>
        </div>
      
      </div>
    </>
  );
}
export default Navbar;
