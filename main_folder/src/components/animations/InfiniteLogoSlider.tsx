'use client';

import Image from 'next/image';
import Slider from 'react-infinite-logo-slider';

const size = 'w-12'; // Tailwind-Klasse für Breite (48px)

const InfiniteLogoSlider = () => {
  return (
    <Slider
      width="200px"
      duration={15}
    >
      <Slider.Slide>
        <Image
          src="/blender-1.svg"
          alt="Blender"
          className={size}
          width={48}
          height={48}
          unoptimized={true} // SVGs müssen oft unoptimized bleiben
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/framer-icon.svg"
          alt="Framer"
          className={size}
          width={48}
          height={48}
          unoptimized={true}
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/javascript.svg"
          alt="JavaScript"
          className={size}
          width={48}
          height={48}
          unoptimized={true}
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/nextjs.svg"
          alt="Next.js"
          className={size}
          width={48}
          height={48}
          unoptimized={true}
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/unity.svg"
          alt="Unity"
          className={size}
          width={48}
          height={48}
          unoptimized={true}
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/unreal-engine.svg"
          alt="Unreal Engine"
          className={size}
          width={48}
          height={48}
          unoptimized={true}
        />
      </Slider.Slide>
    </Slider>
  );
};

export default InfiniteLogoSlider;
