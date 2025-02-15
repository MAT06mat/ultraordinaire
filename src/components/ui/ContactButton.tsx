import { motion } from "motion/react";
import "../../assets/css/ContactButton.scss";

function ContactButton() {
    function handleClick() {
        window.open(
            "mailto:julien.coindet21@icloud.com?subject=Mail%20depuis%20ultraordinaire.fr"
        );
    }
    return (
        <motion.div
            className="contact-button margin"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
        >
            Contactez moi maintenant
        </motion.div>
    );
}

export default ContactButton;
