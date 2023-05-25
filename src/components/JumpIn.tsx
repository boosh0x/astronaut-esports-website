import { useEffect, useState } from "react";
import Button from "./Button";
import Socials from "./Socials";

export default function JumpIn() {
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
    <div
      style={{ display: scrolledPastViewport ? "none" : "flex" }}
      className="z-10 absolute bottom-32 flex flex-col items-center gap-8"
    >
      <Button href="https://hyperfy.io/astronaut">Blast Off!</Button>
      <Socials />
    </div>
  );
}
