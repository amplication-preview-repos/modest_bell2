import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  outcomeId?: SortOrder;
  placedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
