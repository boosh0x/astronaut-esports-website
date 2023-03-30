import { useState } from "react";

export default function Teams() {
  const teams = [
    { name: "Echo VR", image: "/teams/echo-vr.png" },
    { name: "Street Fighter", image: "/teams/street-fighter.png" },
  ];

  const [selectedTeam, setSelectedTeam] = useState(0);

  return (
    <div id="teams" className="flex items-center gap-8">
      <Button
        image="/space.png"
        selected={selectedTeam === 0}
        onClick={() => setSelectedTeam(0)}
      >
        All
      </Button>
      {teams.map((team, index) => (
        <Button
          image={team.image}
          selected={selectedTeam === index + 1}
          onClick={() => setSelectedTeam(index + 1)}
        >
          {team.name}
        </Button>
      ))}
    </div>
  );
}

function Button(props: {
  children: string;
  image: string;
  selected: boolean;
  onClick: Function;
}) {
  return (
    <button
      key={props.children}
      draggable={false}
      onClick={() => props.onClick()}
      style={{
        backgroundImage: `url(${props.image})`,
        filter: props.selected ? "grayscale(0)" : "",
      }}
      className="group text-white outline-none grayscale hover:grayscale-0 transition-all duration-300 text-2xl font-stargaze cursor-pointer select-none px-8 py-2 cut-corners bg-center bg-no-repeat bg-cover"
    >
      <p
        style={{
          opacity: props.selected ? "1" : "",
        }}
        className="opacity-[0.6] g group-hover:opacity-100 transition-opacity duration-300"
      >
        {props.children}
      </p>
    </button>
  );
}
