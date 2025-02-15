import { ReactNode } from "react";
import ImageVideo from "../ui/ImageVideo";
import { motion } from "motion/react";

interface Props {
    children: ReactNode;
    source?: string;
    videoLink?: string;
    reverse?: boolean;
    proportion?: number;
    alt?: string;
}

function TextImage({
    children,
    source,
    videoLink,
    reverse = false,
    proportion = 50,
    alt = "Photo de Julien",
}: Props) {
    return (
        <motion.div
            className={reverse ? "cols reverse" : "cols"}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.95 },
            }}
        >
            <div
                className="text"
                style={{ width: (100 - proportion).toString() + "%" }}
            >
                {children}
            </div>
            {source && !videoLink ? (
                <img
                    src={"/images/" + source}
                    alt={alt}
                    style={{ width: proportion.toString() + "%" }}
                    className="shadow"
                />
            ) : null}
            {source && videoLink ? (
                <ImageVideo src={source} link={videoLink} />
            ) : null}
        </motion.div>
    );
}

export default TextImage;
