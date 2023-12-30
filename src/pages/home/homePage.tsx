import React from "react";

export const HomePage: React.FC = () => {
    return (
        <div className="h-full overflow-hidden relative">
            <a className="absolute text-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 z-20  z-100 flex flex-col items-center hover:scale-105 transition-all duration-300  cursor-pointer" href="/fw24">
                <p className="text-white text-[42px] sm:leading-[60px] sm:text-[64px] font-bold">
                    fw24
                </p>
                <p className="font-extrabold text-center text-[48px] leading-4  sm:text-[64px] sm:leading-[65px] mt-4 whitespace-nowrap">
                    FÜR CŌÃTS
                </p>
            </a>
            <div className="absolute h-full w-full bg-black opacity-60 z-10"></div>
            <video
                className="object-cover h-full w-full absolute top-0 left-0 z-0"
                src="https://bockle.ru/images/1216(1).mp4"
                autoPlay
                muted
                loop
            />
        </div>
    );
}