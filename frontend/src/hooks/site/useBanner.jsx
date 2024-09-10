import { useEffect, useRef } from "react";

const useBanner = () => {
  const bannerRef = useRef(null);
  const isMobile = window.innerWidth < 1000;

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY;
        bannerRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

        if(isMobile) {
          bannerRef.current.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    bannerRef
  };

}

export default useBanner;