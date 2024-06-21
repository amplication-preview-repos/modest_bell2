import { Bet } from "../bet/Bet";
import { JsonValue } from "type-fest";

export type User = {
  bets?: Array<Bet>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
