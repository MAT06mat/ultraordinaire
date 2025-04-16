import { HTMLMotionProps, motion, useInView } from "motion/react";
import { useRef } from "react";

interface Props extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

function FadeIn({ children, ...props }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: true });
    return (
        <motion.div
            {...props}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
            }}
        >
            {children}
        </motion.div>
    );
}

export default FadeIn;
