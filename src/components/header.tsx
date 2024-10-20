import { useState } from "react";

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
                <a href="#a" className="logo">
                    <span className="complementary">ULTRA</span>ORDINAIRE
                </a>
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
                        <a href="#">CONFERENCES</a>
                        <ul className="drop-menu">
                            <li>
                                <a href="#link2">MENTAL</a>
                            </li>
                            <li>
                                <a href="#link3">PHYSIQUE</a>
                            </li>
                            <li>
                                <a href="#link4">ENTOURAGE</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">RESEAU</a>
                        <ul className="drop-menu">
                            <li>
                                <a href="#link2">SECTEURS D'INTERVENTION</a>
                            </li>
                            <li>
                                <a href="#link3">
                                    COORDINATION DES INTERVENTIONS
                                </a>
                            </li>
                            <li>
                                <a href="#link4">
                                    OPTIMISATION DES CONDITIONS D'INTERVENTION
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#link1">ASSOCIATIONS</a>
                        <ul className="drop-menu last">
                            <li>
                                <a href="#link2">MISSIONS</a>
                            </li>
                            <li>
                                <a href="#link3">
                                    PROJETS SPORTIFS SOLIDAIRES ET DE COHESION
                                </a>
                            </li>
                            <li>
                                <a href="#link4">PROJETS INNOVANTS</a>
                            </li>
                            <li>
                                <a href="#link5">CREATION COURSE SOLIDAIRE</a>
                            </li>
                            <li>
                                <a href="#link6">
                                    MISE EN LUMIERE DU HANDICAP ET DE LA
                                    DEPENDANCE
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
