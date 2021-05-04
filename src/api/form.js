function FormControllerMixin(BaseClass) {
  return class FormController extends BaseClass {
    async getForm(id) {
      const { data } = await this.api.get(`/forms/${id}`);
      return data.form;
    }

    async postForm(id, fields) {
      const data = await this.api.post(`/forms/${id}/answer`, {
        fields
      });
      return data;
    }
  };
}

export default FormControllerMixin;
