import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OutcomeWhereInput = {
  bets?: BetListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  odds?: FloatNullableFilter;
};
