import { Link } from "react-router-dom";
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-3">
            <h6>John Doe</h6>
            <p>40 Rue Laure Diebold<br />69009 Lyon, France<br />Téléphone : 06 20 30 40 50</p>
            <div className="d-inline-block p-2 d-flex justify-content-start">
              <a href="#" className="mx-3 text-black"><i className="fa-2x fa-brands fa-github"></i></a>
              <a href="#" className="mx-3 text-black"><i className="fa-2x fa-brands fa-twitter"></i></a>
              <a href="#" className="mx-3 text-black"><i className="fa-2x fa-brands fa-linkedin"></i></a>
            </div>

          </div>
          <div className="col-md-3">
            <h6>Liens utiles</h6>
            <ul className="list-unstyled">
              <li><i className="fa-solid fa-chevron-right text-primary"></i> <Link to="/" className="text text-decoration-none">Accueil</Link></li>
              <li><i className="fa-solid fa-chevron-right text-primary"></i> <Link to="#" className="text text-decoration-none">À propos</Link></li>
              <li><i className="fa-solid fa-chevron-right text-primary"></i> <Link to="/Services" className="text text-decoration-none">Services</Link></li>
              <li><i className="fa-solid fa-chevron-right text-primary"></i> <Link to="/Contact" className="text text-decoration-none">Me contacter</Link></li>
              <li><i className="fa-solid fa-chevron-right text-primary"></i> <Link to="Mentions-legals" className="text text-decoration-none">Mentions légales</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Mes dernières réalisations</h6>
            <ul className="list-unstyled">
              <li><i className="fa-solid fa-chevron-right text-primary"></i> Fresh food</li>
              <li><i className="fa-solid fa-chevron-right text-primary"></i> Restaurant Akira</li>
              <li><i className="fa-solid fa-chevron-right text-primary"></i> Espace bien-être</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Mes derniers articles</h6>
            <ul className="list-unstyled">
              <li><i className="fa-solid fa-chevron-right text-primary"></i> Coder son site en HTML/CSS</li>
              <li><i className="fa-solid fa-chevron-right text-primary"></i> Vendre ses produits sur le web</li>
              <li><i className="fa-solid fa-chevron-right text-primary"></i> Se positionner sur Google</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">&copy; Designed by John Doe</div>
      </div>
    </footer>
  );
}

export default Footer;