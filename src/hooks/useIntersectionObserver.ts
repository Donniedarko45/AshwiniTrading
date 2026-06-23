import { useEffect, useRef, useState } from 'react';

interface CustomIntersectionObserverInit extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver(options?: CustomIntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && options?.triggerOnce) {
        observer.disconnect();
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isIntersecting] as const;
}
