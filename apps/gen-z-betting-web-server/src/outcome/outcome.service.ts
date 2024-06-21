import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutcomeServiceBase } from "./base/outcome.service.base";

@Injectable()
export class OutcomeService extends OutcomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
