import {useEffect, RefObject} from 'react'

export function addActiveScroll<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, topOffset: number = 0) {
  useEffect(() => {
    const element = ref?.current;
    const listener = () => {
      if (window.scrollY > topOffset) {
        element?.classList.add('is-scrolling');
      } else {
        element?.classList.remove('is-scrolling');
      }
    };
    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);
}