import { useState, useRef, useEffect } from 'react';

type UseVisibilityObserverArgs = {
    options?: IntersectionObserverInit & { keepObersving?: boolean };
    onVisible?: () => void;
    defaultVisible?: boolean;
};

export const useVisibilityObserver = <T extends HTMLElement>(
    args?: UseVisibilityObserverArgs
) => {
    const { options, onVisible } = args || {};
    const [isVisible, setIsVisible] = useState(Boolean(args?.defaultVisible));
    const elementRef = useRef<T>(null);

    const intersectionObserver = useRef<IntersectionObserver | null>(null);

    function intercectionObserverCallback(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        setIsVisible(Boolean(entry?.isIntersecting));
        entry?.isIntersecting && onVisible?.();

        if (entry?.isIntersecting && !options?.keepObersving) {
            intersectionObserver.current?.unobserve(entry.target);
        }
    }

    useEffect(() => {
        const currentElement = elementRef.current;
        intersectionObserver.current = new IntersectionObserver(intercectionObserverCallback, options);

        if (currentElement) {
            intersectionObserver.current?.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                intersectionObserver.current?.unobserve(currentElement);
            }
        };
    }, []);

    return { ref: elementRef, isVisible: isVisible };
};
