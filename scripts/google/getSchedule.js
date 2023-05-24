import fetch from "node-fetch";

export default async function getSchedule() {
  const response = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/5983a1a741bb35432ca59554a6878d82b218f699ab7edfe8e4ea9a67730070fc@group.calendar.google.com/events?" +
      new URLSearchParams({
        singleEvents: "true",
        orderBy: "startTime",
        timeMin: new Date().toISOString(),
        maxResults: "5",
        key: process.env.GOOGLE,
      })
  );
  const calendar = await response.json();

  return calendar.items || [];
}
