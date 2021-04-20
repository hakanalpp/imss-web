import BaseController from "./base";
import UserControllerMixin from "./user";
import FormControllerMixin from "./form";
import ThesesControllerMixin from "./theses";

const mix = (mixins, baseClass) => mixins.reduce((newClass, mixin) => mixin(newClass), baseClass);

const API = mix([UserControllerMixin, FormControllerMixin, ThesesControllerMixin], BaseController);

const api = new API({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PRODUCTION
      : process.env.REACT_APP_API_URL_DEVELOPMENT,
  timeout: 20000
});

export default api;
