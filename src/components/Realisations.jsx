import freshFood from "../assets/fresh-food.jpg";
import restaurant from '../assets/restaurant-japonais.jpg';
import bienEtre from '../assets/espace-bien-etre.jpg';

import "../css/Realisation.css";

function Realisations() {
  return (
    <div>
      <div className="banner"></div>
      <div className="py-5 text-center">
        <h2 className="fw-bold">PORTFOLIO</h2>
        <p className="mb-4">Voici quelques-unes de mes réalisations.</p>
        <div
          className="border-primary mx-auto"
          style={{
            height: "2px",
            width: "10%",
            backgroundColor: "blue",
          }}
        />
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={freshFood} className="card-img-top" alt="Fresh food" />
              <div className="card-body text-center">
                <h3 className="card-title">Fresh food</h3>
                <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                <button className="btn btn-outline-primary">Voir</button>
              </div>
              <div className="card-footer text-muted text-center small">
                Site réalisé avec PHP et MySQL
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={restaurant} className="card-img-top" alt="Fresh food" />
              <div className="card-body text-center">
                <h3 className="card-title">Restaurant Akira</h3>
                <p className="card-text">Réalisation d'un site vitrine.</p>
                <button className="btn btn-outline-primary">Voir</button>
              </div>
              <div className="card-footer text-muted text-center small">
                Site avec WordPress
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={bienEtre} className="card-img-top" alt="Fresh food" />
              <div className="card-body text-center">
                <h3 className="card-title">Espace Bien-être</h3>
                <p className="card-text">Réalisation d'un site vitrine pour un patricien de bien-être.</p>
                <button className="btn btn-outline-primary">Voir</button>
              </div>
              <div className="card-footer text-muted text-center small">
                Site réalisé en HTML/CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realisations;
