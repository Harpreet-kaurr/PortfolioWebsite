"use client";
import { useRef, useEffect, useState } from "react";

export default function FadeInSection({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 } // 20% of element visible before triggering
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center
        transition-all duration-[1100ms] ease-out
        ${isVisible ? "opacity-100 translate-x-[300px] " : "opacity-0 translate-x-[75px]"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
