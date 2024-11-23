import "../assets/css/Header.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [showed, setShowed] = useState(false);

    useEffect(() => {
        const header = document.getElementById("header");
        function handleScroll() {
            if (header) {
                if (window.scrollY > header.offsetHeight * 2) {
                    setShowed(true);
                } else {
                    setShowed(false);
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
    });

    const [menuState, setMenuState] = useState(false);

    function handleOpen() {
        setMenuState(true);
    }

    function handleClose() {
        setMenuState(false);
    }

    return (
        <header className={showed ? "showed" : ""} id="header">
            <nav>
                <div className="btn menu-btn" onClick={handleOpen}>
                    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6L37 6" />
                        <path d="M3 34L37 34" />
                        <path d="M3 20L37 20" />
                    </svg>
                </div>
                <Link to="" className="logo">
                    <span className="complementary">ULTRA</span>ORDINAIRE
                </Link>
                <div className="background-button" onClick={handleClose}></div>
                <ul className={menuState ? "nav-links open" : "nav-links"}>
                    <div className="btn close-btn" onClick={handleClose}>
                        <svg
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 37L37 3" />
                            <path d="M37 37L3 3" />
                        </svg>
                    </div>
                    <li>
                        <Link to="aventures" onClick={handleClose}>
                            AVENTURES
                        </Link>
                    </li>
                    <li>
                        <Link to="reseau" onClick={handleClose}>
                            RÉSEAU
                        </Link>
                        <ul className="drop-menu">
                            <li>
                                <Link
                                    to="reseau/secteurs-d-intervention"
                                    onClick={handleClose}
                                >
                                    SECTEURS D'INTERVENTION
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="reseau/coordination-des-interventions"
                                    onClick={handleClose}
                                >
                                    COORDINATION DES INTERVENTIONS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="reseau/optimisation-des-conditions-d-interventions"
                                    onClick={handleClose}
                                >
                                    OPTIMISATION DES CONDITIONS D'INTERVENTION
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="associations" onClick={handleClose}>
                            ASSOCIATIONS
                        </Link>
                        <ul className="drop-menu last">
                            <li>
                                <Link
                                    to="associations/missions"
                                    onClick={handleClose}
                                >
                                    MISSIONS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="associations/projets-sportifs-solidaires-et-de-cohesion"
                                    onClick={handleClose}
                                >
                                    PROJETS SPORTIFS SOLIDAIRES ET DE COHÉSION
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="associations/projets-innovants"
                                    onClick={handleClose}
                                >
                                    PROJETS INNOVANTS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="associations/creation-course-solidaire"
                                    onClick={handleClose}
                                >
                                    CRÉATION COURSE SOLIDAIRE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="associations/handicap-et-dependance"
                                    onClick={handleClose}
                                >
                                    MISE EN LUMIÈRE DU HANDICAP ET DE LA
                                    DÉPENDANCE
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
