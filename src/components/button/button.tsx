import React from "react";

type TButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
};

export const Button: React.FC<TButtonProps> = ({ onClick, text, className }) => {
    return (
        <div onClick={onClick} className={`border cursor-pointer border-black ${className} py-6 flex justify-center active:scale-95 transition-all duration-150`}>
            <p className="text-black text-2xl font-semibold" >
                {text}
            </p>
        </div>
    );
}