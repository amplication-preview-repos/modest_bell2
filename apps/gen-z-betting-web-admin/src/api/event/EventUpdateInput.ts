import { BetUpdateManyWithoutEventsInput } from "./BetUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  bets?: BetUpdateManyWithoutEventsInput;
  date?: Date | null;
  name?: string | null;
  possibleOutcomes?: Array<"Option1">;
};
