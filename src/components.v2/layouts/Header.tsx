import "../../assets/css/Header.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "../../assets/images/MenuButton";
import CloseButton from "../../assets/images/CloseButton";

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
        document.querySelector("body")?.classList.add("stop-scrolling");
    }

    function handleClose() {
        setMenuState(false);
        document.querySelector("body")?.classList.remove("stop-scrolling");
    }

    return (
        <header className={showed ? "showed" : ""} id="header">
            <nav>
                <div className="btn menu-btn" onClick={handleOpen}>
                    <MenuButton />
                </div>
                <Link to="" className="logo">
                    <span className="complementary">ULTRA</span>ORDINAIRE
                </Link>
                <div className="background-button" onClick={handleClose}></div>
                <ul className={menuState ? "nav-links open" : "nav-links"}>
                    <div className="btn close-btn" onClick={handleClose}>
                        <CloseButton />
                    </div>
                    <li>
                        <Link to="" onClick={handleClose}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="mon-chemin" onClick={handleClose}>
                            Mon chemin
                        </Link>
                    </li>
                    <li>
                        <Link to="qui-je-suis" onClick={handleClose}>
                            Qui je suis ?
                        </Link>
                    </li>
                    <li>
                        <Link to="à-propos" onClick={handleClose}>
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
