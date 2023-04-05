import { useEffect, useState } from "react";

export default function NavLink(props: { href: string; children: any }) {
  const [black, setBlack] = useState(false);

  useEffect(() => {
    const link = document.getElementById(props.href) as HTMLAnchorElement;
    const content = document.getElementById("content") as HTMLDivElement;

    window.addEventListener("scroll", () => {
      // Get the bounding rectangles for each element
      const fixedRect = content.getBoundingClientRect();
      const movingRect = link.getBoundingClientRect();

      // Check if the two elements intersect
      if (
        fixedRect.top < movingRect.bottom &&
        fixedRect.bottom > movingRect.top &&
        fixedRect.left < movingRect.right &&
        fixedRect.right > movingRect.left
      ) {
        setBlack(true);
      } else setBlack(false);
    });
  }, []);

  return (
    <a
      id={props.href}
      href={props.href}
      draggable={false}
      style={{
        color: black ? "black" : "",
        WebkitBackgroundClip: black ? "unset" : "text",
        background: black ? "none" : "",
      }}
      className="text-xl text-white hover:text-transparent transition-colors duration-300 bg-clip-text bg-gradient-to-br from-blue to-purple"
    >
      {props.children}
    </a>
  );
}
