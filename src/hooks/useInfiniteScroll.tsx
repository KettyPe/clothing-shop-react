import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (callback: () => void, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [callback, options]);

  return ref;
};
