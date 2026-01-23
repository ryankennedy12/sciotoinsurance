import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      setDisplayedChildren(children);
      return;
    }

    // Fade out, then update content and fade in
    setIsVisible(false);
    
    const timeout = setTimeout(() => {
      setDisplayedChildren(children);
      // Small delay before fade in
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname, children]);

  return (
    <div
      className={cn(
        "transition-opacity duration-300 motion-reduce:transition-none",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {displayedChildren}
    </div>
  );
}
