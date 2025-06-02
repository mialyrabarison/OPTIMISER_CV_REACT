import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
    return (
        <div>
            <div className="banner"></div>
            <div className="text-center my-5">
                <h1>MON OFFRE DE SERVICES</h1>
                <p className="lead">Voici les prestations sur lesquelles je peux intervenir.</p>
                <hr className="w-25 mx-auto" style={{ borderTop: '3px solid #007bff' }} />
            </div>

            <div className="container my-5">
                <div className="row text-center">
                    <div className="col-md-3 mb-4">
                        <div className="border rounded p-4 shadow-sm h-100">
                            <i class="fa-solid fa-desktop fs-1 text-primary"></i>
                            <h5 className="mt-3">UX DESIGN</h5>
                            <p>
                                <strong>L’UX Design</strong> est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir une expérience de navigation optimale à l’internaute.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="border rounded p-4 shadow-sm h-100">
                            <i className="fa-solid fa-file-code fs-1 text-primary"></i>
                            <h5 className="mt-3">DÉVELOPPEMENT WEB</h5>
                            <p>
                                Le <strong>développement de sites</strong> web repose sur l’utilisation des langages <a href="#">HTML</a>, <a href="#">CSS</a>, JavaScript et <a href="#">PHP</a>.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="border rounded p-4 shadow-sm h-100">
                            <i class="fa-solid fa-magnifying-glass-dollar fs-1 text-primary"></i>
                            <h5 className="mt-3">RÉFÉRENCEMENT</h5>
                            <p>
                                Le <strong>référencement naturel</strong> d’un site, aussi appelé <a href="#">SEO</a>, consiste à mettre des techniques en œuvre pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
