import { motion } from "motion/react";

interface Props {
    className?: string;
    href?: string;
    src?: string;
    alt?: string;
    _blank?: boolean;
}

function LinkImage({ className, href, src, alt, _blank = true }: Props) {
    return (
        <motion.a
            className={className}
            href={href}
            target={_blank ? "_blank" : ""}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            <img src={"/images/" + src} alt={alt} />
        </motion.a>
    );
}

export default LinkImage;
