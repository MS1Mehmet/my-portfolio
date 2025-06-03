import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "300px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            '2xl':"1536px",
            '3xl':"1600px" 
        },
        extend: {
            zIndex: {
                60:'60',
                70:'70',
                80:'80',
                90:'90',
                100:'100',
            },
            fontSize: {
                
                '1.5xl':'19px',
                '2.5xl':'26px',
                '3.5xl':'34px',
                '4.5xl':'40px',
                '5.5xl':'50px',
            },
            // Deine bestehende Font-Extension
            fontFamily: {
                oxanium: ['var(--font-oxanium)', 'sans-serif'],
            },
            // Hier kommen die Keyframes und Animation hinzu:
            keyframes: {
                wave: {
                    "0%, 100%": {
                        opacity: "0",
                        transform: "scale(0.5)",
                        background: "transparent",
                    },
                    "50%": {
                        opacity: "1",
                        transform: "scale(1.4)",
                        background: "rgb(30,165,210)",
                    },
                },
                arrowAnimate: {
                    "0%": {
                      borderColor: "#fff",
                      transform: "translate(0, 0)",
                    },
                    "20%": {
                      borderColor: "#fff",
                      transform: "translate(15px, 15px)",
                    },
                    "20.1%, 100%": {
                      borderColor: "#1ab6f5",
                    },
                }
            },
            animation: {
                wave: "wave 3s ease-in-out infinite",
                arrow: "arrowAnimate 1.5s linear infinite",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "1rem",
                lg: "1rem",
            },
        },
    },
    plugins: [],
};
export default config;

