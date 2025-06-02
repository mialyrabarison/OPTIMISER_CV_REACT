function MentionLegal() {
  return (
    <div className="container pb-5">
      <div className="py-5">
        <h1 className="fw-bold text-center">MENTIONS LEGALS</h1>
        <div
          className="border-primary mx-auto mb-3"
          style={{
            height: "2px",
            width: "10%",
            backgroundColor: "blue",
          }}
        />
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Editeur du site
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h3>Jhon Doe</h3>
                <p><i class="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p><i class="fa-solid fa-mobile-screen"></i> <a href="tel:0620304050" className="text-decoration-none">06 20 30 40 50</a></p>
                <p><i class="fa-solid fa-envelope"></i> <a href="mailto:jhon.doe@gmail.com" className="text-decoration-none">jhon.doe@gmail.com</a></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hébergeur
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h3>Always Data</h3>
                <p>91 Rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p><i class="fa-solid fa-globe"></i> <a href="#" className="text-decoration-none">www.alwaysdata.com</a></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Crédits
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h3>Crédits</h3>
                <p>Ce site a été réalisé par Jhon Doe, éetudiant du CEF.</p>
                <p>Les images libres de droit sont issue de <a href="#" className="text-decoration-none">Pixabay</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentionLegal;