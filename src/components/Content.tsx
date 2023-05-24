import { useState } from "react";
import Teams from "./Teams";
import type { Article, Event, Partner, Team } from "../utils/fetchCache";
import News from "./News";
import Schedule from "./Schedule";
import Partners from "./Partners";

export default function Content(props: {
  teams: Team[];
  news: Article[];
  schedule: Event[];
  partners: Partner[];
}) {
  const [selectedTeam, setSelectedTeam] = useState(0);

  return (
    <>
      <Teams
        teams={props.teams}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />
      <News news={props.news} teams={props.teams} selectedTeam={selectedTeam} />
      <Schedule
        schedule={props.schedule}
        selectedTeam={selectedTeam}
        teams={props.teams}
      />
      <Partners partners={props.partners} />
    </>
  );
}
