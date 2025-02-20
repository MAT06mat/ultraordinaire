import { HTMLMotionProps, motion } from "motion/react";

interface Props extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

function FadeIn({ children, ...props }: Props) {
    return (
        <motion.div
            {...props}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.95 },
            }}
        >
            {children}
        </motion.div>
    );
}

export default FadeIn;
