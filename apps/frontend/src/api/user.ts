/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import BaseController, { Constructor } from "./base";

function UserControllerMixin<T extends Constructor<BaseController>>(
  BaseClass: T,
) {
  return class UserController extends BaseClass {

  };
}

export default UserControllerMixin;
