import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { OutcomeTitle } from "../outcome/OutcomeTitle";
import { UserTitle } from "../user/UserTitle";

export const BetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <ReferenceInput source="outcome.id" reference="Outcome" label="Outcome">
          <SelectInput optionText={OutcomeTitle} />
        </ReferenceInput>
        <DateTimeInput label="placedAt" source="placedAt" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
