function AcademicianControllerMixin(BaseClass) {
  return class AcademicianController extends BaseClass {
    async getAcademicians() {
      const { data } = await this.api.get("/academicians");
      return data.data;
    }
  };
}

export default AcademicianControllerMixin;
