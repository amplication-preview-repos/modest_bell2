/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Bet as PrismaBet,
  Event as PrismaEvent,
  Outcome as PrismaOutcome,
  User as PrismaUser,
} from "@prisma/client";

export class BetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BetCountArgs, "select">): Promise<number> {
    return this.prisma.bet.count(args);
  }

  async bets(args: Prisma.BetFindManyArgs): Promise<PrismaBet[]> {
    return this.prisma.bet.findMany(args);
  }
  async bet(args: Prisma.BetFindUniqueArgs): Promise<PrismaBet | null> {
    return this.prisma.bet.findUnique(args);
  }
  async createBet(args: Prisma.BetCreateArgs): Promise<PrismaBet> {
    return this.prisma.bet.create(args);
  }
  async updateBet(args: Prisma.BetUpdateArgs): Promise<PrismaBet> {
    return this.prisma.bet.update(args);
  }
  async deleteBet(args: Prisma.BetDeleteArgs): Promise<PrismaBet> {
    return this.prisma.bet.delete(args);
  }

  async getEvent(parentId: string): Promise<PrismaEvent | null> {
    return this.prisma.bet
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }

  async getOutcome(parentId: string): Promise<PrismaOutcome | null> {
    return this.prisma.bet
      .findUnique({
        where: { id: parentId },
      })
      .outcome();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.bet
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
