import "../css/Home.css";
import about from "../assets/about.jpg";

const SkillBar = ({ label, percent, color }) => (
  <div className="mb-2">
    {label} {percent}%
    <div className="progress">
      <div
        className={`progress-bar bg-${color}`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

function Home() {
  return (
    <>
      <header className="home position-relative text-white text-center">
        <div className="overlay"></div>
        <div className="content position-relative z-1 text-white">
          <h1 className="text-white">Bonjour, je suis John Doe</h1>
          <h4 className="text-white">Développeur web full stack</h4>
          <a href="#" className="btn btn-primary mt-3">
            En savoir plus
          </a>
        </div>
      </header>

      <section className="py-5">
        <div className="container bg-white p-4 shadow rounded">
          <div className="row">
            <div className="col-md-6">
              <h2>À propos</h2>
              <div
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "blue",
                }}
              />
              <br />
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur-développeur web</strong> au CEF. Au cours de
                cette formation, j'ai pu acquérir des bases solides pour
                travailler dans le domaine du <strong>développement web</strong>
                .
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance pour
                consolider ma formation de{" "}
                <strong>développeur web full stack</strong>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques du web.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={about}
                alt="Développeur"
                className="img-fluid mb-3 rounded"
              />
              <h5>Mes compétences</h5>
              <SkillBar label="HTML5" percent={90} color="danger" />
              <SkillBar label="CSS3" percent={80} color="info" />
              <SkillBar label="JAVASCRIPT" percent={70} color="warning" />
              <SkillBar label="PHP" percent={60} color="success" />
              <SkillBar label="REACT" percent={50} color="primary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
