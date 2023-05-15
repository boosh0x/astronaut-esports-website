import fetch from "node-fetch";

export default async function getSchedule() {
  const response = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/2gl6iku9kcb2qjdrtgdthgng3s@group.calendar.google.com/events?" +
      new URLSearchParams({
        singleEvents: "true",
        orderBy: "startTime",
        timeMin: new Date().toISOString(),
        maxResults: "3",
        key: process.env.GOOGLE,
      })
  );
  const calendar = await response.json();

  // return calendar.items || [];
  return [
    {
      id: "abc",
      htmlLink: "https://www.google.com",
      summary: "[SF] EVO 2023",
      start: {
        dateTime: "2023-05-28T09:00:00-10:00",
      },
    },
    {
      id: "abc",
      htmlLink: "https://www.google.com",
      summary: "[SF] EVO 2023",
      start: {
        dateTime: "2023-05-28T09:00:00-10:00",
      },
    },
    {
      id: "abc",
      htmlLink: "https://www.google.com",
      summary: "[SF] EVO 2023",
      start: {
        dateTime: "2023-05-28T09:00:00-10:00",
      },
    },
    {
      id: "abc",
      htmlLink: "https://www.google.com",
      summary: "[SF] EVO 2023",
      start: {
        dateTime: "2023-05-28T09:00:00-10:00",
      },
    },
    {
      id: "abc",
      htmlLink: "https://www.google.com",
      summary: "[SF] EVO 2023",
      start: {
        dateTime: "2023-05-28T09:00:00-10:00",
      },
    },
  ];
}
