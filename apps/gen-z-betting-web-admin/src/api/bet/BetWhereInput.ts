import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OutcomeWhereUniqueInput } from "../outcome/OutcomeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetWhereInput = {
  amount?: FloatNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  outcome?: OutcomeWhereUniqueInput;
  placedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
