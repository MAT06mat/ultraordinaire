import React, { ReactNode } from "react";

interface Props {
    title: string;
    content: ReactNode;
    active?: boolean;
    onClick: React.MouseEventHandler;
}

function TextDropItem({ title, content, active = false, onClick }: Props) {
    return (
        <div className={active ? "text-drop active" : "text-drop"}>
            <div className="drop-button" onClick={onClick}>
                <div className="title">{title}</div>
                <div className="btn open">
                    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 37L20 3" />
                        <path d="M3 20L37 20" />
                    </svg>
                </div>
                <div className="btn close">
                    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 20L37 20" />
                    </svg>
                </div>
            </div>
            <div className="text-wrapper">
                <div className="text">{content}</div>
            </div>
        </div>
    );
}

export default TextDropItem;
