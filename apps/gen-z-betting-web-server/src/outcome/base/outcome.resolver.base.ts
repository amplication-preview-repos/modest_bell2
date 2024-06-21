/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Outcome } from "./Outcome";
import { OutcomeCountArgs } from "./OutcomeCountArgs";
import { OutcomeFindManyArgs } from "./OutcomeFindManyArgs";
import { OutcomeFindUniqueArgs } from "./OutcomeFindUniqueArgs";
import { CreateOutcomeArgs } from "./CreateOutcomeArgs";
import { UpdateOutcomeArgs } from "./UpdateOutcomeArgs";
import { DeleteOutcomeArgs } from "./DeleteOutcomeArgs";
import { BetFindManyArgs } from "../../bet/base/BetFindManyArgs";
import { Bet } from "../../bet/base/Bet";
import { OutcomeService } from "../outcome.service";
@graphql.Resolver(() => Outcome)
export class OutcomeResolverBase {
  constructor(protected readonly service: OutcomeService) {}

  async _outcomesMeta(
    @graphql.Args() args: OutcomeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Outcome])
  async outcomes(
    @graphql.Args() args: OutcomeFindManyArgs
  ): Promise<Outcome[]> {
    return this.service.outcomes(args);
  }

  @graphql.Query(() => Outcome, { nullable: true })
  async outcome(
    @graphql.Args() args: OutcomeFindUniqueArgs
  ): Promise<Outcome | null> {
    const result = await this.service.outcome(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Outcome)
  async createOutcome(
    @graphql.Args() args: CreateOutcomeArgs
  ): Promise<Outcome> {
    return await this.service.createOutcome({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Outcome)
  async updateOutcome(
    @graphql.Args() args: UpdateOutcomeArgs
  ): Promise<Outcome | null> {
    try {
      return await this.service.updateOutcome({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Outcome)
  async deleteOutcome(
    @graphql.Args() args: DeleteOutcomeArgs
  ): Promise<Outcome | null> {
    try {
      return await this.service.deleteOutcome(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Bet], { name: "bets" })
  async findBets(
    @graphql.Parent() parent: Outcome,
    @graphql.Args() args: BetFindManyArgs
  ): Promise<Bet[]> {
    const results = await this.service.findBets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
