import React from "react";

type TTextLinkProps = {
    href?: string;
    onClick?: () => void;
    text: string;
    className?: string;
};

export const TextLink: React.FC<TTextLinkProps> = ({ onClick, text, className, href }) => {
    return (
        <a href={href} className={`hover:underline underline-offset-[8px] transition-all duration-300 cursor-pointer ${className}`} onClick={onClick ? onClick : undefined} >
            {text}
        </a>
    );
}