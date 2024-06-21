import * as graphql from "@nestjs/graphql";
import { BetResolverBase } from "./base/bet.resolver.base";
import { Bet } from "./base/Bet";
import { BetService } from "./bet.service";

@graphql.Resolver(() => Bet)
export class BetResolver extends BetResolverBase {
  constructor(protected readonly service: BetService) {
    super(service);
  }
}
