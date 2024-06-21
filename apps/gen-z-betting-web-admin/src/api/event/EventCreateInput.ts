import { BetCreateNestedManyWithoutEventsInput } from "./BetCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  bets?: BetCreateNestedManyWithoutEventsInput;
  date?: Date | null;
  name?: string | null;
  possibleOutcomes?: Array<"Option1">;
};
