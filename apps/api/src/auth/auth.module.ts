import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { LocalStrategy, JwtStrategy } from "./strategies";
import { RolesGuard, JwtAuthGuard } from "./guards";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { environment } from "../environments/environment";
import OBSBridge from "@imss/obs-bridge";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: environment.jwtSecret,
      signOptions: { expiresIn: "60h" },
    }),
  ],
  controllers: [AuthController],
  providers: [
    OBSBridge,
    LocalStrategy,
    JwtStrategy,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AuthModule {}
