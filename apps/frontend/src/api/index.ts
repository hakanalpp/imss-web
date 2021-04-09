import BaseController from "./base";
import UserControllerMixin from "./user";
import FormControllerMixin from "./form";

const mix = (mixins, baseClass) =>
  mixins.reduce((newClass, mixin) => mixin(newClass), baseClass);

const PincidentAPI = mix(
  [
    UserControllerMixin,
    FormControllerMixin
  ],
  BaseController
);

const api = new PincidentAPI({
  baseURL: process.env.REACT_APP_API_URL,
  clientId: process.env.REACT_APP_API_CLIENT_KEY,
  timeout: 20000,
});

export default api;
