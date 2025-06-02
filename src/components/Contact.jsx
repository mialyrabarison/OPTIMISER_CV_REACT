import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contact.css';
function Contact() {
  return (
    <div className='contact'>
      <div className="container bg-white shadow p-5 rounded">
        <div className="text-center py-5">
          <h1 className="mb-3">ME CONTACTER</h1>
          <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
          <div className='mb-3 mx-auto'
                style={{
                  height: "2px",
                  width: "25%",
                  backgroundColor: "blue",
                }}
              />
        </div>
        <div className="row">
          <div className="col-md-6 border-end">
            <h4 className="mb-4">Formulaire de contact</h4>
            <div className='mb-3'
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "blue",
                }}
              />
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Votre nom" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Votre adresse email" />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Sujet" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Votre message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>

          <div className="col-md-6 ps-md-4 mt-5 mt-md-0">
            <h4 className="mb-4">Mes coordonnées</h4>
            <div className='mb-3'
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "blue",
                }}
              />
            <p><i className="bi bi-geo-alt"></i> 40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p><i className="bi bi-telephone"></i> 06 20 30 40 50</p>
            <iframe
              src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
              width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              title="Carte"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
