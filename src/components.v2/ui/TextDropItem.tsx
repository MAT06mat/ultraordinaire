import React, { ReactNode } from "react";
import PlusButton from "../../assets/images/PlusButton";
import MinusButton from "../../assets/images/MinusButton";

interface Props {
    title: string;
    content: ReactNode;
    active?: boolean;
    onClick: React.MouseEventHandler;
}

function TextDropItem({ title, content, active = false, onClick }: Props) {
    return (
        <div className={active ? "text-drop active" : "text-drop"}>
            <div className="drop-button v2" onClick={onClick}>
                <div className="title">{title}</div>
                <div className="btn v2 open">
                    <PlusButton />
                </div>
                <div className="btn v2 close">
                    <MinusButton />
                </div>
            </div>
            <div className="text-wrapper">
                <div className="text">{content}</div>
            </div>
        </div>
    );
}

export default TextDropItem;
