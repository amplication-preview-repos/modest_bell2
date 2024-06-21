import { Bet } from "../bet/Bet";

export type Event = {
  bets?: Array<Bet>;
  createdAt: Date;
  date: Date | null;
  id: string;
  name: string | null;
  possibleOutcomes?: Array<"Option1">;
  updatedAt: Date;
};
