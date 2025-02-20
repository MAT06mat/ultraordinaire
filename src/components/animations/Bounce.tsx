import { HTMLMotionProps, motion } from "motion/react";

interface Props extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

function Bounce({ children, ...props }: Props) {
    return (
        <motion.div
            {...props}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            {children}
        </motion.div>
    );
}

export default Bounce;
