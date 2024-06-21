import { Bet } from "../bet/Bet";

export type Outcome = {
  bets?: Array<Bet>;
  createdAt: Date;
  id: string;
  name: string | null;
  odds: number | null;
  updatedAt: Date;
};
