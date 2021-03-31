import { Injectable } from "@nestjs/common";
import { StudentInformationSystemBridge, SISBLoginResult } from "@imss/common";

@Injectable()
export class ObsBridgeService implements StudentInformationSystemBridge {
  login(username: string, password: string): SISBLoginResult {
    return { success: false };
  }
}
