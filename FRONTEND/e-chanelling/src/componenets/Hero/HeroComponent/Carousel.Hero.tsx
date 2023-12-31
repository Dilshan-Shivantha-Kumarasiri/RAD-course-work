
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Carousel } from 'flowbite-react';



export function CarouselHero(): JSX.Element {

    const customTheme: CustomFlowbiteTheme['carousel'] = {
            "root": {
                "base": "relative h-full w-full",
                "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
                "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
            },
            "indicators": {
                "active": {
                    "off": "invisible bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                    "on": " invisible bg-white dark:bg-gray-800"
                },
                "base": "h-3 w-3 rounded-full",
                "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
            },
            "item": {
                "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
                "wrapper": {
                    "off": "w-full flex-shrink-0 transform cursor-default snap-center",
                    "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
                }
            },
            "control": {
                "base": "  inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-[#1A76D1] dark:group-hover:bg-[#2C2D3F] dark:group-focus:ring-gray-800/70 sm:h-14 sm:w-14",
                "icon": " h-5 w-5 text-white dark:text-white sm:h-6 sm:w-6"
            },
            "scrollContainer": {
                "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
                "snap": "snap-x"
            }
    };


    return (
        <div className="h-56 sm:h-80 md:h-[480px] lg:h-[580px]">
            <Carousel theme={customTheme}>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://usebootstrap.com/preview-no-frame/mediplus-lite/img/slider2.jpg" alt=""/>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://usebootstrap.com/preview-no-frame/mediplus-lite/img/slider.jpg" alt=""/>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://usebootstrap.com/preview-no-frame/mediplus-lite/img/slider3.jpg" alt=""/>
                </div>
            </Carousel>
        </div>
    );

}