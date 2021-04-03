import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { Public } from "./decorators";
import ObsBridgeService from "@imss/obs-bridge";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private obsBridgeService: ObsBridgeService
  ) {}

  @Post("login")
  @Public()
  @UseGuards(LocalAuthGuard)
  async create(@Req() req) {
    return this.authService.getToken(req.user);
  }

  @Get("profile")
  async getProfile(@Req() req) {
    const { data } = await this.obsBridgeService.getUserById(req.user.id);
    return data;
  }
}
