
import React from 'react';

interface SlideProps {
    isActive: boolean;
    children: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({ isActive, children }) => {
    return (
        <div
            className={`w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center p-8 text-center transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ pointerEvents: isActive ? 'auto' : 'none' }}
        >
            {children}
        </div>
    );
};
