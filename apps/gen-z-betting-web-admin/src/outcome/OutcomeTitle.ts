import { Outcome as TOutcome } from "../api/outcome/Outcome";

export const OUTCOME_TITLE_FIELD = "name";

export const OutcomeTitle = (record: TOutcome): string => {
  return record.name?.toString() || String(record.id);
};
