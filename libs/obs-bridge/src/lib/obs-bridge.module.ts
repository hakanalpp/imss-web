import { Module } from "@nestjs/common";
import { ObsBridgeService } from "./obs-bridge.service";

@Module({
  controllers: [],
  providers: [ObsBridgeService],
  exports: [ObsBridgeService],
})
export class ObsBridgeModule {}
