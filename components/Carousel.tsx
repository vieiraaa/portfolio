"use client";

import { useEffect, useRef, useState } from "react";
// CSS inlined via styled-jsx in the component to avoid global .css import issues

export default function Carousel() {
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const imgs = [
    "https://picsum.photos/800/450",
    "https://picsum.photos/800/452",
    "https://picsum.photos/800/453",
    "https://picsum.photos/800/454",
    "https://picsum.photos/800/455",
    "https://picsum.photos/800/456",
    "https://picsum.photos/800/457",
    "https://picsum.photos/800/458",
    "https://picsum.photos/800/459",
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll(".carousel__slide")) as HTMLElement[];

    const updateScreen = (index: number) => {
      const screen = screenRef.current;
      if (!screen) return;
      screen.innerHTML = "";
      const img = document.createElement("img");
      img.src = imgs[index];
      img.alt = "";
      screen.appendChild(img);
    };

    const scrollTo = (index: number) => {
      const activeSlide = slides[index];
      if (!activeSlide) return;
      const { offsetLeft, offsetWidth } = activeSlide;
      const { clientWidth } = slider;
      slider.scrollTo({ left: offsetLeft - clientWidth / 2 + offsetWidth / 2, behavior: "smooth" });
    };

    // attach click handlers
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === activeIdx);
      s.onclick = () => setActiveIdx(i);
    });

    updateScreen(activeIdx);
    scrollTo(activeIdx);

    return () => {
      slides.forEach((s) => (s.onclick = null));
    };
  }, [activeIdx]);

  const prev = () => setActiveIdx((s) => Math.max(0, s - 1));
  const next = () => setActiveIdx((s) => Math.min(imgs.length - 1, s + 1));

  return (
    <div className="image-thumbnail-carousel">
      <style jsx>{`
        .image-thumbnail-carousel{--gap:0.75rem;--border-xl:20px;--border-m:8px;--accent-color:hsl(198,86%,53%);--fill-primary:hsl(204,3%,47%);--fill-active:hsl(204,23%,20%);padding:1rem;width:clamp(360px,90vw,820px);display:flex;flex-flow:column;gap:1rem;position:relative}
        .image-display{border-radius:var(--border-xl);overflow:hidden;min-height:30vmin;aspect-ratio:16/9;box-shadow:0 .375em .67em rgba(0,0,0,0.2),0 .5em 1.3em rgba(0,0,0,0.13)}
        .screen{height:100%;display:flex;background-image:linear-gradient(12deg,#111,#222);position:relative;user-select:none}
        .screen img{width:100%;height:100%;object-fit:cover}
        .thumbnail-carousel{display:flex;gap:var(--gap);align-items:center}
        .carousel__btn{flex:1 0 max(2.75rem,5.834%);background:transparent;border:0;cursor:pointer;display:flex;align-items:center}
        .arrow-icon{margin-inline:auto;width:max(80%,1.5rem);height:max(80%,1.5rem);fill:var(--fill-primary)}
        .carousel__btn:hover .arrow-icon{fill:var(--fill-active)}
        .carousel__slider{user-select:none;flex-grow:999;list-style:none;display:flex;gap:var(--gap);padding:0.5rem;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}
        :global(.carousel__slider::-webkit-scrollbar){display:none}
        .carousel__slide{cursor:pointer;border-radius:var(--border-m);overflow:hidden;scroll-snap-align:center;flex:1 0 calc((100% / 5) - 10px)}
        .carousel__slide .thumbnail img{display:block;width:100%;height:100%;object-fit:cover}
        .carousel__slide.active{outline:0.125em solid var(--accent-color);outline-offset:-0.37em}
        @media (max-width:680px){.image-thumbnail-carousel{width:90vw}.carousel__slide{flex:none;aspect-ratio:1;border-radius:50%}}
      `}</style>
      <section className="image-display">
        <div className="screen" ref={screenRef}></div>
      </section>
      <section className="thumbnail-carousel">
        <button type="button" className="carousel__btn prev" onClick={prev} aria-label="Previous slide">
          <svg width="16" height="16" fill="currentColor" className="arrow-icon arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>
        <ul className="carousel__slider" ref={sliderRef} aria-live="polite">
          {imgs.map((src, i) => (
            <li key={src} className={`carousel__slide ${i === activeIdx ? "active" : ""}`}>
              <div className="thumbnail">
                <img loading="lazy" src={src} alt="" />
              </div>
            </li>
          ))}
        </ul>
        <button type="button" className="carousel__btn next" onClick={next} aria-label="Next slide">
          <svg width="16" height="16" fill="currentColor" className="arrow-icon arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </section>
    </div>
  );
}
