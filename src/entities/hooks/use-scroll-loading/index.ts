import { useEffect, useRef, useState } from "react";
import { UseScrollLoadingOptions } from "./types";

export const useScrollLoading = <T extends HTMLElement>({
  onDataLoad,
  hasMoreData = true,
  bottomScrollOffset,
}: UseScrollLoadingOptions) => {
  const [element, setElement] = useState<T | null>(null);
  const loader = useRef(onDataLoad);
  const elementObserver = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loader.current();
        }
      },
      {
        rootMargin: `0px 0px ${bottomScrollOffset ?? 0}px 0px`,
        threshold: 0,
      }
    )
  );

  useEffect(() => {
    loader.current = onDataLoad;
  }, [onDataLoad]);

  useEffect(() => {
    const currentObserver = elementObserver.current;

    if (element && hasMoreData) {
      currentObserver.observe(element);
    }

    return () => {
      if (element) {
        currentObserver.unobserve(element);
      }
    };
  }, [element, hasMoreData]);

  return {
    setElement,
  };
};
