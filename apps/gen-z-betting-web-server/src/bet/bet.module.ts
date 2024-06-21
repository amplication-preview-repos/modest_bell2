import { Module } from "@nestjs/common";
import { BetModuleBase } from "./base/bet.module.base";
import { BetService } from "./bet.service";
import { BetController } from "./bet.controller";
import { BetResolver } from "./bet.resolver";

@Module({
  imports: [BetModuleBase],
  controllers: [BetController],
  providers: [BetService, BetResolver],
  exports: [BetService],
})
export class BetModule {}
