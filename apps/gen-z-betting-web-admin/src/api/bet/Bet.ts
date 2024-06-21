import { Event } from "../event/Event";
import { Outcome } from "../outcome/Outcome";
import { User } from "../user/User";

export type Bet = {
  amount: number | null;
  createdAt: Date;
  event?: Event | null;
  id: string;
  outcome?: Outcome | null;
  placedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
