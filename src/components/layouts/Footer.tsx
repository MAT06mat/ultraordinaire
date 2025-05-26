import "../../assets/css/Footer.scss";
import LinkImage from "../ui/LinkImage";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="sponsor">
                    <div>
                        <LinkImage
                            href="https://altore.corsica/"
                            src="fc540aad.jpg"
                        />
                    </div>
                    <div>
                        <LinkImage
                            href="https://dcsportdeveloppement.my.canva.site/david-clerget-dcsport/"
                            src="partenariats/45adcc5a.png"
                        />
                    </div>
                    <div>
                        <LinkImage
                            href="https://naturalorigins.me/"
                            src="partenariats/1445x.webp"
                        />
                    </div>
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
