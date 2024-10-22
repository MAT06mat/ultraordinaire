import "../assets/css/header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [showed, setShowed] = useState(false);

    useEffect(() => {
        let root = document.getElementById("root");
        let header = document.getElementById("header");
        if (root && header)
            root.onscroll = function () {
                if (root.scrollTop > header.offsetHeight * 2) {
                    setShowed(true);
                } else {
                    setShowed(false);
                }
            };
    });

    const [menuState, setMenuState] = useState(false);

    function openMenu() {
        setMenuState(true);
    }

    function closeMenu() {
        setMenuState(false);
    }

    return (
        <header className={showed ? "showed" : ""} id="header">
            <nav>
                <div className="btn menu-btn" onClick={openMenu}>
                    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6L37 6" />
                        <path d="M3 34L37 34" />
                        <path d="M3 20L37 20" />
                    </svg>
                </div>
                <Link to="" className="logo">
                    <span className="complementary">ULTRA</span>ORDINAIRE
                </Link>
                <div className="background-button" onClick={closeMenu}></div>
                <ul className={menuState ? "nav-links open" : "nav-links"}>
                    <div className="btn close-btn" onClick={closeMenu}>
                        <svg
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 37L37 3" />
                            <path d="M37 37L3 3" />
                        </svg>
                    </div>
                    <li>
                        <Link to="conferences" onClick={closeMenu}>
                            CONFERENCES
                        </Link>
                        <ul className="drop-menu">
                            <li>
                                <Link
                                    to="conferences/mental"
                                    onClick={closeMenu}
                                >
                                    MENTAL
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="conferences/physique"
                                    onClick={closeMenu}
                                >
                                    PHYSIQUE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="conferences/entourage"
                                    onClick={closeMenu}
                                >
                                    ENTOURAGE
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="reseau" onClick={closeMenu}>
                            RESEAU
                        </Link>
                        <ul className="drop-menu">
                            <li>
                                <Link
                                    to="reseau/secteurs-d-intervention"
                                    onClick={closeMenu}
                                >
                                    SECTEURS D'INTERVENTION
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="reseau/coordination-des-interventions"
                                    onClick={closeMenu}
                                >
                                    COORDINATION DES INTERVENTIONS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="reseau/optimisation-des-conditions-d-interventions"
                                    onClick={closeMenu}
                                >
                                    OPTIMISATION DES CONDITIONS D'INTERVENTION
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="associations" onClick={closeMenu}>
                            ASSOCIATIONS
                        </Link>
                        <ul className="drop-menu last">
                            <li>
                                <Link
                                    to="associations/missions"
                                    onClick={closeMenu}
                                >
                                    MISSIONS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="associations/projets-sportifs-solidaires-et-de-cohesion"
                                    onClick={closeMenu}
                                >
                                    PROJETS SPORTIFS SOLIDAIRES ET DE COHESION
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="associations/projets-innovants"
                                    onClick={closeMenu}
                                >
                                    PROJETS INNOVANTS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="associations/creation-course-solidaire"
                                    onClick={closeMenu}
                                >
                                    CREATION COURSE SOLIDAIRE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="associations/handicap-et-dependance"
                                    onClick={closeMenu}
                                >
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
