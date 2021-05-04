/* eslint-disable camelcase */
function ThesesControllerMixin(BaseClass) {
  return class ThesesController extends BaseClass {
    async proposeToAdvisor(title, description, advisor_id) {
      const { data } = await this.api.post("/theses", { title, description, advisor_id });
      return data.message;
    }

    async getProposals() {
      const { data } = await this.api.get("/theses");
      return data.theses;
    }

    async getProposal(thesis_id) {
      const { data } = await this.api.get(`/theses/${thesis_id}`);
      return data.thesis;
    }

    async evaluateThesis(status, advisor_id) {
      const { data } = await this.api.patch(`/theses/${advisor_id}/status`, {
        accept: status
      });
      return data.message;
    }
  };
}

export default ThesesControllerMixin;
