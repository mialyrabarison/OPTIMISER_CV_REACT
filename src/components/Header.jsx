import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-3">
      <div className="container-fluid mx-5">
        <Link to="/" className="navbar-brand">
          <h1 className="text-light m-0">JOHN DOE</h1>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/Réalisations" className="nav-link">Réalisations</Link>
            </li>
            <li className="nav-item">
              <Link to="/Blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">Me contacter</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>

  );
}

export default Header;