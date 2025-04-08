import "../../assets/css/ContactButton.scss";
import Bounce from "../animations/Bounce";

function ContactButton() {
    function handleClick() {
        window.open(
            "mailto:julien.coindet21@icloud.com?subject=Mail%20depuis%20ultraordinaire.fr"
        );
    }
    return (
        <Bounce className="contact-button margin" onClick={handleClick}>
            Contactez moi maintenant
        </Bounce>
    );
}

export default ContactButton;
