import { useMotionValue, motion, animate, useTransform } from "motion/react";
import { ReactNode } from "react";

interface Props {
    className?: string;
    target: number;
    extraText?: string;
    children?: ReactNode;
}

function Counter({ className, target, extraText, children }: Props) {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    function startCounter() {
        setTimeout(() => {
            animate(count, target, { duration: 2 });
        }, 1000);
    }

    return (
        <motion.div
            className={"counter " + className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                delay: 0.8,
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
                    <motion.pre onViewportEnter={startCounter}>
                        {rounded}
                    </motion.pre>
                    {extraText}
                </b>
            </div>
            {children ? <div className="counter-text">{children}</div> : null}
        </motion.div>
    );
}

export default Counter;
