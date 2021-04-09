/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import BaseController, { Constructor } from "./base";

function FormControllerMixin<T extends Constructor<BaseController>>(
  BaseClass: T,
) {
  return class FormController extends BaseClass {

  };
}

export default FormControllerMixin;
