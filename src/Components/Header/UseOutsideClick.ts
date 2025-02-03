import { useEffect, useRef } from 'react';
function useOutsideClick(callback: () => void) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        const handleScroll = () => {
            callback();
        };
        document.addEventListener('click', handleClick);
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);
    return ref;
}
export default useOutsideClick;