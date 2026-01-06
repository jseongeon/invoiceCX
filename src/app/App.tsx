import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 6;

  // Define which sections have light backgrounds (need dark UI)
  const lightBackgroundSections = [1, 2, 3, 4]; // Section2-5 have #f2f2f2 background
  const isDarkUI = lightBackgroundSections.includes(currentSection);

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.querySelector(`[data-section="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#152c2d]">
      {/* Sections */}
      <div data-section="0">
        <Section1 />
      </div>
      <div data-section="1">
        <Section2 />
      </div>
      <div data-section="2">
        <Section3 />
      </div>
      <div data-section="3">
        <Section4 />
      </div>
      <div data-section="4">
        <Section5 />
      </div>
      <div data-section="5">
        <Section6 />
      </div>

      {/* Navigation dots */}
      <div className="fixed right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`group relative transition-all duration-300 ${
              currentSection === index ? 'w-2 md:w-3 h-8 md:h-12' : 'w-2 md:w-3 h-2 md:h-3'
            }`}
            aria-label={`Go to section ${index + 1}`}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? isDarkUI ? 'bg-[#303634]' : 'bg-white'
                  : isDarkUI ? 'bg-[#303634]/30 group-hover:bg-[#303634]/60' : 'bg-white/30 group-hover:bg-white/60'
              }`}
            />
            {/* Tooltip */}
            <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
              <div className={`px-3 py-1 rounded text-sm whitespace-nowrap ${
                isDarkUI ? 'bg-[#303634] text-white' : 'bg-white text-black'
              }`}>
                {['Intro', 'WHY?', 'CX', 'POINT', 'IMPROVEMENTS', 'Closing'][index]}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className={`fixed bottom-0 left-0 w-full h-1 z-50 ${
        isDarkUI ? 'bg-[#303634]/20' : 'bg-white/20'
      }`}>
        <motion.div
          className={`h-full ${isDarkUI ? 'bg-[#303634]' : 'bg-white'}`}
          style={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Scroll down indicator (only on first section) */}
      {currentSection === 0 && (
        <motion.div
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-white text-sm tracking-wider">SCROLL</p>
          
          {/* Pill-shaped scroll indicator */}
          <div className="relative w-8 h-16 rounded-full border-2 border-white/60 flex items-start justify-center p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-white"
              animate={{ 
                y: [0, 40, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
