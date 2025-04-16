import {
    useMotionValue,
    motion,
    animate,
    useTransform,
    useInView,
} from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
    className?: string;
    target: number;
    extraText?: string;
    children?: ReactNode;
}

function Counter({ className, target, extraText, children }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    useEffect(() => {
        if (isInView) {
            animate(count, target, { duration: 2 });
        }
    });

    return (
        <motion.div
            ref={ref}
            className={"counter " + className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
            }}
            variants={{
                visible: { opacity: 1, scale: 1, y: 0 },
                hidden: { opacity: 0, scale: 0, y: "-5em" },
            }}
            whileHover={{ scale: 1.2, transition: { delay: 0 } }}
        >
            <div className="counter-number">
                <b>
                    <motion.pre>{rounded}</motion.pre>
                    {extraText}
                </b>
            </div>
            {children ? <div className="counter-text">{children}</div> : null}
        </motion.div>
    );
}

export default Counter;
