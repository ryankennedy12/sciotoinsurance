import { useEffect, useRef, useState, RefObject } from "react";

// --- Shared singleton IntersectionObserver ---
const THRESHOLD = 0.15;
const ROOT_MARGIN = "0px 0px -30px 0px";

type VisibilityCallback = (isVisible: boolean) => void;

const callbacks = new Map<Element, VisibilityCallback>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cb = callbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
    );
  }
  return sharedObserver;
}

function observe(el: Element, cb: VisibilityCallback) {
  callbacks.set(el, cb);
  getSharedObserver().observe(el);
}

function unobserve(el: Element) {
  callbacks.delete(el);
  getSharedObserver().unobserve(el);
  if (callbacks.size === 0 && sharedObserver) {
    sharedObserver.disconnect();
    sharedObserver = null;
  }
}

// --- Hook ---
interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean] {
  const { triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    observe(element, (visible) => {
      if (visible) {
        setIsVisible(true);
        if (triggerOnce) {
          unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    });

    return () => {
      unobserve(element);
    };
  }, [triggerOnce]);

  return [ref, isVisible];
}

// Hook for staggered animations on multiple children
export function useStaggeredAnimation(
  itemCount: number,
  baseDelay: number = 75
): number[] {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) {
    return Array(itemCount).fill(0);
  }

  return Array.from({ length: itemCount }, (_, i) => i * baseDelay);
}
