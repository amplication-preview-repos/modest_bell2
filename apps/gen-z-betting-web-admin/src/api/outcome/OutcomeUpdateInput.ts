import { BetUpdateManyWithoutOutcomesInput } from "./BetUpdateManyWithoutOutcomesInput";

export type OutcomeUpdateInput = {
  bets?: BetUpdateManyWithoutOutcomesInput;
  name?: string | null;
  odds?: number | null;
};
