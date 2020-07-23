import { Office } from "./index";

export const offices: Office[] = [
  {
    city: "Amsterdam",
    picture: "/assets/cities/amsterdam.jpg",
    weather: {
      description:
        "Mostly cloudy. Has great summer days with sun. Cold in winter.",
      averageTemparature: 18,
    },
    flights: {
      averageTicketsFromCurrentOffice: 150,
    },
  },
  {
    city: "Madrid",
    picture: "/assets/cities/madrid.jpg",
    weather: {
      description:
        "Mostly sunny. Spain has perfect summers. Winter is not that though",
      averageTemparature: 24,
    },
    flights: {
      averageTicketsFromCurrentOffice: 187,
    },
  },
  {
    city: "Budapest",
    picture: "/assets/cities/budapest.jpg",
    weather: {
      description:
        "Proper 4 seasons. You can expect to have cold winters and sunny summers.",
      averageTemparature: 23,
    },
    flights: {
      averageTicketsFromCurrentOffice: 146,
    },
  },
];
