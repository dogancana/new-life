import { offices } from "./mock";

export interface Office {
  city: string;
  picture: string;
  weather: {
    description: string;
    averageTemparature: number;
  };
  flights: {
    averageTicketsFromCurrentOffice: number;
  };
}

export async function getOffices(): Promise<Office[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(offices);
    }, 1500);
  });
}
