import type { Event, Team } from "../utils/fetchCache";
import Button from "./Button";

export default function Schedule(props: {
  schedule: Event[];
  selectedTeam: number;
  teams: Team[];
}) {
  console.log(props.schedule);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2
          id="schedule"
          className="text-4xl font-xxix select-none  max-sm:text-3xl"
        >
          SCHEDULE
        </h2>
        <Button href="https://calendar.google.com/calendar/u/0?cid=NTk4M2ExYTc0MWJiMzU0MzJjYTU5NTU0YTY4NzhkODJiMjE4ZjY5OWFiN2VkZmU4ZTRlYTlhNjc3MzAwNzBmY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
          See more
        </Button>
      </div>
      <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:overflow-x-scroll max-sm:-mx-8 gap-8">
        {props.schedule.map((event) => (
          <Event event={event} teams={props.teams} />
        ))}
      </div>
    </div>
  );
}

function Event(props: { event: Event; teams: Team[] }) {
  const type = props.event.summary
    ?.split(" ")[0]
    .replace("[", "")
    .replace("]", "");

  const game = props.teams.find((team) => team.name.includes(type));

  const date = new Date(props.event.start.dateTime);

  return (
    <a
      key={props.event.htmlLink}
      href={props.event.htmlLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative cursor-pointer aspect-video max-sm:first:pl-8 max-sm:last:pr-8"
      draggable={false}
    >
      <div className="absolute max-sm:hidden cut-corners-lg w-full h-full bg-gradient-to-r from-blue to-purple"></div>
      <div
        style={{ backgroundImage: `url(${game?.image || "/space.png"})` }}
        className="relative cut-corners-lg max-sm:w-[calc(100vw_-_64px)] h-full bg-center bg-cover select-none font-stargaze text-white hover:translate-x-2 hover:-translate-y-2 duration-300 p-6 text-xl max-2xl:text-base max-2xl:leading-snug bg-white leading-tight flex flex-col-reverse"
      >
        <p className="text-grey text-base font-roboto-condensed">
          {`${date.toLocaleDateString([], {
            dateStyle: "medium",
          })} -
        ${date.toLocaleTimeString([], {
          timeStyle: "short",
        })}`}
        </p>
        {props.event.summary?.replace(`[${type}]`, "")}
        <div className="text-xs bg-blue font-roboto-condensed font-semibold px-2 py-1 rounded-full w-min mb-2">
          {type}
        </div>
      </div>
    </a>
  );
}
