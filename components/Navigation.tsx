
import React from 'react';

interface NavigationProps {
    currentSlide: number;
    totalSlides: number;
    onPrev: () => void;
    onNext: () => void;
    onGoTo: (slide: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, onPrev, onNext, onGoTo }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-center items-center z-20">
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2 flex items-center gap-4">
                <button 
                    onClick={onPrev} 
                    disabled={currentSlide === 1}
                    className="text-slate-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed p-2"
                    aria-label="Previous Slide"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <div className="flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onGoTo(index + 1)}
                            className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                                currentSlide === index + 1 ? 'bg-sky-500' : 'bg-slate-600 hover:bg-slate-500'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={onNext} 
                    disabled={currentSlide === totalSlides}
                    className="text-slate-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed p-2"
                    aria-label="Next Slide"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    );
};
