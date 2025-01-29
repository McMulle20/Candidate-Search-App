import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav">
      <div className="nav-logo-container">
        <Link to="/" id="logo" className="nav-link">
          <img src="path/to/your/image.png" alt="Candidate Search Logo" className="nav-logo" />
          <span>Candidate Search</span>
        </Link>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${currentPage === '/' ? 'active' : ''}`}
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/saved"
            className={`nav-link ${currentPage === '/saved' ? 'active' : ''}`}
          >
            POTENTIAL CANDIDATES
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;