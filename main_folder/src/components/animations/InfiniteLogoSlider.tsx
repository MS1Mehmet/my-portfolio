'use client';
import Slider from 'react-infinite-logo-slider'

const size = 'w-12';

const InfiniteLogoSlider = () => {
    
    return (
        <Slider
            width='200px'
            duration={15}
            
           
            
            
        >
            <Slider.Slide>
                <img src="/blender-1.svg" alt="Blender" className={size}/>
            </Slider.Slide>
            <Slider.Slide>
                <img src="/framer-icon.svg" alt="any2" className={size} />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/javascript.svg" alt="any3" className={size}/>
            </Slider.Slide>
            <Slider.Slide>
                <img src="/nextjs.svg" alt="any4" className={size} />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/unity.svg" alt="any4" className={size}/>
            </Slider.Slide>
            <Slider.Slide>
                <img src="/unreal-engine.svg" alt="any4" className={size} />
            </Slider.Slide>
           
        </Slider>
    )
}              
                     
export default InfiniteLogoSlider