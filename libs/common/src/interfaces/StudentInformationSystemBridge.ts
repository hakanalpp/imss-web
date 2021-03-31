export interface SISBResult<T> {
  success: boolean;
  error?: string;
  data?: T;
}

export type SISBLoginResult = SISBResult<{ token: string }>;

export interface StudentInformationSystemBridge {
  login: (username: string, password: string) => SISBLoginResult;
}
