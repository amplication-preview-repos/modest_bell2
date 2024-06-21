import { BetCreateNestedManyWithoutOutcomesInput } from "./BetCreateNestedManyWithoutOutcomesInput";

export type OutcomeCreateInput = {
  bets?: BetCreateNestedManyWithoutOutcomesInput;
  name?: string | null;
  odds?: number | null;
};
