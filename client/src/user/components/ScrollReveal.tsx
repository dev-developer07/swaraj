import { useEffect, useRef, useState, type ReactNode, type FunctionComponent } from "react";

export type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number | number[];
};

export const ScrollReveal: FunctionComponent<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dynamicThreshold, setDynamicThreshold] = useState(0.05);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || threshold !== undefined) return;

    const calculateThreshold = () => {
      if (!ref.current) return;
      const elementHeight = ref.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      if (elementHeight > 0) {
        const maxPossibleRatio = Math.min(1.0, viewportHeight / elementHeight);
        // Trigger when the element is 80% of its maximum possible visibility
        setDynamicThreshold(maxPossibleRatio * 0.8);
      }
    };

    calculateThreshold();

    window.addEventListener("resize", calculateThreshold);
    const timer = setTimeout(calculateThreshold, 500);

    return () => {
      window.removeEventListener("resize", calculateThreshold);
      clearTimeout(timer);
    };
  }, [threshold]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If scrolled out of view, we reset it so it animate again when scrolling down
          setIsVisible(false);
        }
      },
      {
        threshold: threshold !== undefined ? threshold : dynamicThreshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, dynamicThreshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0" : "translate-y-16";
      case "down":
        return isVisible ? "translate-y-0" : "-translate-y-16";
      case "left":
        return isVisible ? "translate-x-0" : "translate-x-16";
      case "right":
        return isVisible ? "translate-x-0" : "-translate-x-16";
      case "none":
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 blur-0" : "opacity-0 blur-[4px]"
        } ${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
