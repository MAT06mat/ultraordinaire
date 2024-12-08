import "../../assets/css/Footer.scss";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="sponsor">
                    <div>Sponsor 1</div>
                    <div>Sponsor 2</div>
                    <div>Sponsor 3</div>
                </div>
                <div className="copyright separator">
                    <div>© 2024 Julien Coindet</div>
                    <div>
                        Tous droits réservés - Site réalisé par{" "}
                        <a
                            className="link"
                            href="https://mat06mat.github.io/MAT06mat"
                        >
                            MAT06mat
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
