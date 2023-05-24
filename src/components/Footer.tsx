import { useEffect, useState } from "react";
import Button from "./Button";
import Socials from "./Socials";
import type { Cache } from "../utils/fetchCache";

export default function Footer(props: { metadata: Cache["metadata"] }) {
  const [scrolledPastViewport, setScrolledPastViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const bounds = window.innerWidth > 640 ? 320 : 640;
      if (window.scrollY > bounds) {
        setScrolledPastViewport(true);
      } else setScrolledPastViewport(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      style={{
        display: scrolledPastViewport ? "flex" : "none",
      }}
      className="fixed bottom-0 w-full h-40 max-sm:h-80 px-12 gap-16 flex max-sm:flex-col justify-between max-sm:justify-center items-center"
    >
      <div className="flex items-center gap-6">
        <img
          src="/logo.png"
          alt=""
          className="w-20 h-20 max-sm:w-16 max-sm:h-16"
        />
        <div className="flex flex-col pr-20">
          <p className="font-xxix text-4xl text-white whitespace-nowrap max-sm:text-2xl">
            Astronaut Esports
          </p>
          <p className="text-grey text-lg -ml-2 max-sm:text-base">
            {props.metadata.tagline}
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center gap-16 max-sm:gap-8 max-sm:justify-between">
          <Button href="">Newsletter</Button>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
