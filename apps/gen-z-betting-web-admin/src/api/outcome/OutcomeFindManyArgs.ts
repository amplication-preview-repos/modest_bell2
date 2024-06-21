import { OutcomeWhereInput } from "./OutcomeWhereInput";
import { OutcomeOrderByInput } from "./OutcomeOrderByInput";

export type OutcomeFindManyArgs = {
  where?: OutcomeWhereInput;
  orderBy?: Array<OutcomeOrderByInput>;
  skip?: number;
  take?: number;
};
