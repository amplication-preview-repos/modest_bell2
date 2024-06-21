import * as graphql from "@nestjs/graphql";
import { OutcomeResolverBase } from "./base/outcome.resolver.base";
import { Outcome } from "./base/Outcome";
import { OutcomeService } from "./outcome.service";

@graphql.Resolver(() => Outcome)
export class OutcomeResolver extends OutcomeResolverBase {
  constructor(protected readonly service: OutcomeService) {
    super(service);
  }
}
