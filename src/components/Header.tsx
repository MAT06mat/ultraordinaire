import "../assets/css/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    const [showed, setShowed] = useState(false);

    if (body && html)
        body.onscroll = function () {
            let header = document.getElementById("header");
            if (!header) return;
            if (html.scrollTop > header.offsetHeight * 2) {
                setShowed(true);
            } else {
                setShowed(false);
            }
        };

    return (
        <header className={showed ? "showed" : ""} id="header">
            <nav>
                <label htmlFor="menu-btn" className="btn menu-btn">
                    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6L37 6" />
                        <path d="M3 34L37 34" />
                        <path d="M3 20L37 20" />
                    </svg>
                </label>
                <Link to="" className="logo">
                    <span className="complementary">ULTRA</span>ORDINAIRE
                </Link>
                <input type="radio" name="slider" id="close-btn" />
                <input type="radio" name="slider" id="menu-btn" />
                <ul className="nav-links">
                    <label htmlFor="close-btn" className="btn close-btn">
                        <svg
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 37L37 3" />
                            <path d="M37 37L3 3" />
                        </svg>
                    </label>
                    <li>
                        <Link to="conferences">CONFERENCES</Link>
                        <ul className="drop-menu">
                            <li>
                                <Link to="conferences/mental">MENTAL</Link>
                            </li>
                            <li>
                                <Link to="conferences/physique">PHYSIQUE</Link>
                            </li>
                            <li>
                                <Link to="conferences/entourage">
                                    ENTOURAGE
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="reseau">RESEAU</Link>
                        <ul className="drop-menu">
                            <li>
                                <Link to="reseau/secteurs-d-intervention">
                                    SECTEURS D'INTERVENTION
                                </Link>
                            </li>
                            <li>
                                <Link to="reseau/coordination-des-interventions">
                                    COORDINATION DES INTERVENTIONS
                                </Link>
                            </li>
                            <li>
                                <Link to="reseau/optimisation-des-conditions-d-interventions">
                                    OPTIMISATION DES CONDITIONS D'INTERVENTION
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="associations">ASSOCIATIONS</Link>
                        <ul className="drop-menu last">
                            <li>
                                <Link to="associations/missions">MISSIONS</Link>
                            </li>
                            <li>
                                <Link to="associations/projets-sportifs-solidaires-et-de-cohesion">
                                    PROJETS SPORTIFS SOLIDAIRES ET DE COHESION
                                </Link>
                            </li>
                            <li>
                                <Link to="associations/projets-innovants">
                                    PROJETS INNOVANTS
                                </Link>
                            </li>
                            <li>
                                <Link to="associations/creation-course-solidaire">
                                    CREATION COURSE SOLIDAIRE
                                </Link>
                            </li>
                            <li>
                                <Link to="associations/handicap-et-dependance">
                                    MISE EN LUMIERE DU HANDICAP ET DE LA
                                    DEPENDANCE
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
