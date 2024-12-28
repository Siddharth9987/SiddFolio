import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="160"
          height="45"
          viewBox="0 25.68000030517578 199.29861450195312 35.84000015258789"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.79 61.52Q7.13 61.52 4.88 60.16Q2.66 58.79 1.33 56.51Q0 54.22 0 51.49L0 49.19Q0 48.93 0.24 48.93L5.86 48.93Q6.05 48.93 6.05 49.19L6.05 51.49Q6.05 53.13 7.15 54.31Q8.25 55.49 9.79 55.49Q11.35 55.49 12.45 54.28Q13.55 53.08 13.55 51.49Q13.55 49.66 11.16 48.29Q10.77 48.05 10.14 47.69Q9.52 47.34 8.67 46.88Q7.81 46.41 7.01 45.96Q6.20 45.51 5.44 45.09Q2.71 43.48 1.38 41.05Q0.05 38.62 0.05 35.60Q0.05 32.81 1.42 30.57Q2.78 28.34 4.99 27.04Q7.20 25.73 9.79 25.73Q12.45 25.73 14.67 27.05Q16.89 28.39 18.23 30.62Q19.56 32.84 19.56 35.60L19.56 39.70Q19.56 39.89 19.36 39.89L13.75 39.89Q13.55 39.89 13.55 39.70L13.50 35.60Q13.50 33.84 12.40 32.74Q11.30 31.64 9.79 31.64Q8.25 31.64 7.15 32.81Q6.05 33.98 6.05 35.60Q6.05 37.23 6.75 38.33Q7.45 39.43 9.30 40.43Q9.50 40.53 10.21 40.92Q10.91 41.31 11.78 41.78Q12.65 42.26 13.35 42.64Q14.06 43.02 14.21 43.09Q16.70 44.48 18.15 46.51Q19.60 48.54 19.60 51.49Q19.60 54.35 18.29 56.62Q16.94 58.89 14.72 60.21Q12.50 61.52 9.79 61.52ZM28.98 61.04L23.32 61.04Q23.07 61.04 23.07 60.79L23.12 26.44Q23.12 26.25 23.32 26.25L28.93 26.25Q29.13 26.25 29.13 26.44L29.17 60.79Q29.17 61.04 28.98 61.04ZM42.77 60.99L33.81 61.04Q33.57 61.04 33.57 60.79L33.67 26.44Q33.67 26.25 33.86 26.25L43.21 26.20Q46.00 26.12 48.24 27.47Q50.51 28.81 51.87 31.09Q53.22 33.37 53.22 36.13L53.22 50.49Q53.22 53.37 51.83 55.76Q50.42 58.13 48.07 59.53Q45.73 60.94 42.77 60.99M43.21 32.18L39.72 32.23L39.67 54.88L42.77 54.88Q44.63 54.88 45.90 53.59Q47.17 52.29 47.17 50.49L47.17 36.08Q47.17 34.50 46.00 33.31Q44.82 32.13 43.21 32.18ZM66.36 60.99L57.40 61.04Q57.15 61.04 57.15 60.79L57.25 26.44Q57.25 26.25 57.45 26.25L66.80 26.20Q69.58 26.12 71.83 27.47Q74.10 28.81 75.45 31.09Q76.81 33.37 76.81 36.13L76.81 50.49Q76.81 53.37 75.42 55.76Q74.00 58.13 71.66 59.53Q69.31 60.94 66.36 60.99M66.80 32.18L63.31 32.23L63.26 54.88L66.36 54.88Q68.21 54.88 69.48 53.59Q70.75 52.29 70.75 50.49L70.75 36.08Q70.75 34.50 69.58 33.31Q68.41 32.13 66.80 32.18ZM90.82 46.58L81.15 46.58Q80.91 46.58 80.91 46.39L80.91 40.94Q80.91 40.75 81.15 40.75L90.82 40.75Q91.06 40.75 91.06 40.94L91.06 46.39Q91.06 46.58 90.82 46.58ZM101.73 61.04L96.12 61.04Q95.87 61.04 95.87 60.79L95.97 26.44Q95.97 26.25 96.17 26.25L112.18 26.25Q112.43 26.25 112.43 26.44L112.43 32.08Q112.43 32.28 112.23 32.28L101.98 32.28L101.98 40.04L112.23 40.04Q112.43 40.04 112.43 40.28L112.48 45.95Q112.48 46.14 112.23 46.14L101.98 46.14L101.98 60.79Q101.98 61.04 101.73 61.04ZM126.17 61.52Q123.51 61.52 121.26 60.16Q119.04 58.79 117.69 56.51Q116.33 54.22 116.33 51.49L116.38 35.64Q116.38 32.86 117.72 30.64Q119.04 28.39 121.29 27.04Q123.54 25.68 126.17 25.68Q128.91 25.68 131.08 27.03Q133.28 28.37 134.61 30.63Q135.94 32.89 135.94 35.64L135.99 51.49Q135.99 54.22 134.67 56.49Q133.33 58.79 131.10 60.16Q128.88 61.52 126.17 61.52M126.17 55.49Q127.69 55.49 128.81 54.26Q129.93 53.03 129.93 51.49L129.88 35.64Q129.88 33.98 128.83 32.84Q127.78 31.69 126.17 31.69Q124.63 31.69 123.54 32.81Q122.44 33.94 122.44 35.64L122.44 51.49Q122.44 53.13 123.54 54.31Q124.63 55.49 126.17 55.49ZM156.10 61.04L139.94 61.04Q139.75 61.04 139.75 60.79L139.79 26.49Q139.79 26.25 140.04 26.25L145.61 26.25Q145.85 26.25 145.85 26.49L145.80 54.88L156.10 54.88Q156.35 54.88 156.35 55.13L156.35 60.79Q156.35 61.04 156.10 61.04ZM165.50 61.04L159.84 61.04Q159.59 61.04 159.59 60.79L159.64 26.44Q159.64 26.25 159.84 26.25L165.45 26.25Q165.65 26.25 165.65 26.44L165.70 60.79Q165.70 61.04 165.50 61.04ZM179.35 61.52Q176.68 61.52 174.44 60.16Q172.22 58.79 170.86 56.51Q169.51 54.22 169.51 51.49L169.56 35.64Q169.56 32.86 170.90 30.64Q172.22 28.39 174.46 27.04Q176.71 25.68 179.35 25.68Q182.08 25.68 184.25 27.03Q186.45 28.37 187.78 30.63Q189.11 32.89 189.11 35.64L189.16 51.49Q189.16 54.22 187.84 56.49Q186.50 58.79 184.28 60.16Q182.06 61.52 179.35 61.52M179.35 55.49Q180.86 55.49 181.98 54.26Q183.11 53.03 183.11 51.49L183.06 35.64Q183.06 33.98 182.01 32.84Q180.96 31.69 179.35 31.69Q177.81 31.69 176.71 32.81Q175.61 33.94 175.61 35.64L175.61 51.49Q175.61 53.13 176.71 54.31Q177.81 55.49 179.35 55.49ZM198.19 37.99L193.29 37.99Q193.09 37.99 193.09 37.74L193.90 26.44Q193.95 26.25 194.14 26.25L199.10 26.25Q199.34 26.25 199.29 26.44L198.34 37.84Q198.34 37.99 198.19 37.99Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.5 1.5H111V6.50001H113.5C112.119 6.50001 111 7.61931 111 9.00001V11.5H116V9.00001C116 10.3807 117.119 11.5 118.5 11.5H121V6.50001H118.5C119.881 6.50001 121 5.38072 121 4V1.5H116V4C116 2.61929 114.881 1.5 113.5 1.5ZM116 6.50001H113.5C114.881 6.50001 116 7.61931 116 9.00001V6.50001ZM116 6.50001V4C116 5.38072 117.119 6.50001 118.5 6.50001H116Z"
          />
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span><b>About</b></span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span><b>Service</b></span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span><b>Projects</b></span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
