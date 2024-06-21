import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutcomeService } from "./outcome.service";
import { OutcomeControllerBase } from "./base/outcome.controller.base";

@swagger.ApiTags("outcomes")
@common.Controller("outcomes")
export class OutcomeController extends OutcomeControllerBase {
  constructor(protected readonly service: OutcomeService) {
    super(service);
  }
}
