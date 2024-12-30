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
    }

    function handleClose() {
        setMenuState(false);
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
                        <Link to="mes-sentiers" onClick={handleClose}>
                            Mes Sentiers
                        </Link>
                    </li>
                    <li>
                        <Link to="about" onClick={handleClose}>
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
