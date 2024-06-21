import { Module } from "@nestjs/common";
import { OutcomeModuleBase } from "./base/outcome.module.base";
import { OutcomeService } from "./outcome.service";
import { OutcomeController } from "./outcome.controller";
import { OutcomeResolver } from "./outcome.resolver";

@Module({
  imports: [OutcomeModuleBase],
  controllers: [OutcomeController],
  providers: [OutcomeService, OutcomeResolver],
  exports: [OutcomeService],
})
export class OutcomeModule {}
