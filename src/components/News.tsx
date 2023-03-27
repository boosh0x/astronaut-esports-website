export default function News() {
  return (
    <div className="grid grid-cols-5 gap-8">
      <Article image="/teams/echo-vr.png" href="https://www.google.com">
        Introducing our new Echo VR roster!
      </Article>
      <Article image="/teams/echo-vr.png" href="https://www.google.com">
        Introducing our new Echo VR roster!
      </Article>
      <Article image="/teams/echo-vr.png" href="https://www.google.com">
        Introducing our new Echo VR roster!
      </Article>
      <Article image="/teams/echo-vr.png" href="https://www.google.com">
        Introducing our new Echo VR roster!
      </Article>
      <Article image="/teams/echo-vr.png" href="https://www.google.com">
        Introducing our new Echo VR roster!
      </Article>
    </div>
  );
}

function Article(props: { image: string; children: string; href: string }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative cursor-pointer aspect-square"
      draggable={false}
    >
      <div className="absolute cut-corners-lg w-full h-full bg-gradient-to-r from-blue to-purple"></div>
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="relative cut-corners-lg h-full bg-center bg-cover select-none font-stargaze text-white hover:translate-x-2 hover:-translate-y-2 duration-300 p-6 text-xl bg-white leading-tight flex flex-col-reverse"
      >
        {props.children}
      </div>
    </a>
  );
}
