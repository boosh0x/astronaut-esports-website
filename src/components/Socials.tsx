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
        href="https://discord.gg/4YjJkZw"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/discord.svg" />
      </a>
      <a
        className="w-8 h-8 flex items-center"
        href="https://www.youtube.com/channel/UCJj0H2Zn0y1tjH7TzFmJj0g"
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
