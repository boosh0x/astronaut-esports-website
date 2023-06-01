export default function Socials() {
  return (
    <div className="flex items-center gap-5">
      <a
        className="w-7 h-7 flex items-center"
        href="https://twitter.com/AstronautEsport"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/twitter.svg" />
      </a>
      <a
        className="w-8 h-8 flex items-center"
        href="https://discord.gg/9SYPNebu9Z"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/discord.svg" />
      </a>
      <a
        className="w-8 h-8 flex items-center"
        href="https://www.youtube.com/@AstronautEsports"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/youtube.svg" />
      </a>
      <a
        href="https://www.twitch.tv/astronautesports"
        target="_blank"
        rel="noreferrer"
        className="w-6 h-6 flex items-center"
      >
        <img src="/icons/twitch.svg" />
      </a>
    </div>
  );
}
