'use client';
import { FC, useState } from "react";
import "../styles/NavbarStyle.css";
import { GlitchButton } from "@/components/buttons/GlitchButton";


const Navbar: FC = () => {



  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleScrollToSection = (index: number, sectionId: string) => {
    setActiveIndex(index);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50
                 w-full px-2 sm:px-4 md:px-6
                 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-screen-xl"
    >
      <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6">
        <li className="flex-shrink-1 w-[22%] min-w-[4rem] sm:w-auto font-oxanium font-medium">
          <GlitchButton
            isActive={activeIndex === 0}
            onClick={() => handleScrollToSection(0, "Home")}
          >
            Home
          </GlitchButton>
        </li>
        <li className="flex-shrink-1 w-[22%] min-w-[4rem] sm:w-auto font-oxanium font-medium">
          <GlitchButton
            isActive={activeIndex === 1}
            onClick={() => handleScrollToSection(1, "About")}
          >
            About
          </GlitchButton>
        </li>
        <li className="flex-shrink-1 w-[22%] min-w-[4rem] sm:w-auto font-oxanium font-medium">
          <GlitchButton
            isActive={activeIndex === 2}
            onClick={() => handleScrollToSection(2, "Projects")}
          >
            Projects
          </GlitchButton>
        </li>
                <li className="flex-shrink-1 w-[22%] min-w-[4rem] sm:w-auto font-oxanium font-medium">
         {/* <GlitchButton
            isActive={activeIndex === 3}
            onClick={() => handleScrollToSection(3, "Kontakt")}
          >
            Kontakt
          </GlitchButton>*/}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
