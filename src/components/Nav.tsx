import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav">
      <ul className="nav-menu"> {/* Changed class from "nav" to "nav-menu" */}
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
            className={`nav-link ${currentPage === '/SavedCandidates' ? 'active' : ''}`}
          >
            POTENTIAL CANDIDATES
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
