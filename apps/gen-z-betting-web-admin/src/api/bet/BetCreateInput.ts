import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { OutcomeWhereUniqueInput } from "../outcome/OutcomeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetCreateInput = {
  amount?: number | null;
  event?: EventWhereUniqueInput | null;
  outcome?: OutcomeWhereUniqueInput | null;
  placedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
