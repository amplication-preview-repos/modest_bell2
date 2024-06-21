import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BetService } from "./bet.service";
import { BetControllerBase } from "./base/bet.controller.base";

@swagger.ApiTags("bets")
@common.Controller("bets")
export class BetController extends BetControllerBase {
  constructor(protected readonly service: BetService) {
    super(service);
  }
}
