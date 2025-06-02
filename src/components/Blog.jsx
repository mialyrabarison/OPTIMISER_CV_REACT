import coder from "../assets/coder.jpg";
import croissance from "../assets/croissance.jpg";
import google from "../assets/google.jpg";
import screens from "../assets/screens.jpg";
import seo from "../assets/seo.jpg";
import technos from "../assets/technos.png";
import "../css/Realisation.css";

const BlogCard = ({ image, title, content, date }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{content}</p>
          <button className="btn btn-primary">Lire la suite</button>
        </div>
        <div className="card-footer text-muted small">Publié le {date}</div>
      </div>
    </div>
  );
};

const articles = [
  {
    image: coder,
    title: "Coder son site en HTML/CSS",
    content:
      "Créer son propre site web est désormais à la portée de tous. Grâce au HTML et au CSS, vous pouvez concevoir des pages modernes, structurées et esthétiques, même sans grandes connaissances en programmation. Apprenez les bases du HTML pour la structure, et du CSS pour le style.",
    date: "22 août 2022",
  },
  {
    image: croissance,
    title: "Vendre ses produits sur le web",
    content:
      "Créer son propre site web est désormais à la portée de tous. Grâce au HTML et au CSS, vous pouvez concevoir des pages modernes, structurées et esthétiques, même sans grandes connaissances en programmation. Apprenez les bases du HTML pour la structure, et du CSS pour le style.",
    date: "20 août 2022",
  },
  {
    image: google,
    title: "Se positionner sur Google",
    content:
      "Créer son propre site web est désormais à la portée de tous. Grâce au HTML et au CSS, vous pouvez concevoir des pages modernes, structurées et esthétiques, même sans grandes connaissances en programmation. Apprenez les bases du HTML pour la structure, et du CSS pour le style.",
    date: "1 août 2022",
  },
  {
    image: screens,
    title: "Coder en responsive design",
    content:
      "Créer son propre site web est désormais à la portée de tous. Grâce au HTML et au CSS, vous pouvez concevoir des pages modernes, structurées et esthétiques, même sans grandes connaissances en programmation. Apprenez les bases du HTML pour la structure, et du CSS pour le style.",
    date: "31 juillet 2022",
  },
  {
    image: seo,
    title: "Techniques de référencement",
    content:
      "Créer son propre site web est désormais à la portée de tous. Grâce au HTML et au CSS, vous pouvez concevoir des pages modernes, structurées et esthétiques, même sans grandes connaissances en programmation. Apprenez les bases du HTML pour la structure, et du CSS pour le style.",
    date: "30 juillet 2022",
  },
  {
    image: technos,
    title: "Apprendre à coder",
    content:
      "Créer son propre site web est désormais à la portée de tous. Grâce au HTML et au CSS, vous pouvez concevoir des pages modernes, structurées et esthétiques, même sans grandes connaissances en programmation. Apprenez les bases du HTML pour la structure, et du CSS pour le style.",
    date: "12 juillet 2022",
  },
];

function Realisations() {
  return (
    <div>
      <div className="banner"></div>
      <div className="py-5 text-center">
        <h2 className="fw-bold">BLOG</h2>
        <p className="mb-4">
          Retrouvez ici quelques articles sur le développement web
        </p>
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
          {articles.map((article, index) => (
            <BlogCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Realisations;
