import { useEffect, useState } from "react";

export default function Title() {
  const [scrolledPastViewport, setScrolledPastViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolledDistance = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrolledDistance > viewportHeight) {
        setScrolledPastViewport(true);
      } else setScrolledPastViewport(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <h1
      style={{ display: scrolledPastViewport ? "none" : "flex" }}
      className="font-xxix text-[8rem] max-2xl:text-8xl max-xl:text-6xl max-[500px]:text-5xl max-[350px]:text-4xl px-8 text-center absolute text-white"
    >
      Astronaut Esports
    </h1>
  );
}
