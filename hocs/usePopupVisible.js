import {useEffect, useRef, useState} from "react";

export default function usePopupVisible(initialIsVisible) {
  const [isPopupVisible, setIsPopupVisible] = useState(initialIsVisible);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target))
      setIsPopupVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return [ref, isPopupVisible, setIsPopupVisible];
}
