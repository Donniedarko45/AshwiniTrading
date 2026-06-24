import React, { useState, useEffect, useRef, Suspense } from 'react';

interface LazySectionProps {
  importFunc: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

export function LazySection({
  importFunc,
  fallback,
  rootMargin = '300px',
  threshold = 0,
  className = ''
}: LazySectionProps) {
  const [isIntersected, setIsIntersected] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<React.ComponentType<any> | null>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  if (isIntersected) {
    if (!componentRef.current) {
      componentRef.current = React.lazy(importFunc);
    }
    const LazyComponent = componentRef.current;
    
    return (
      <Suspense fallback={fallback || <div className="w-full min-h-[400px] bg-brand-bg-dark" />}>
        <LazyComponent />
      </Suspense>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`w-full min-h-[400px] transition-all duration-300 ${className}`} 
    />
  );
}
