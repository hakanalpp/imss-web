export const LOGIN_SUCCESS = "login_success";

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: UserState;
}

export interface UserState {
  username: string;
  role: string;
  name: string;
  surname: string;
}
