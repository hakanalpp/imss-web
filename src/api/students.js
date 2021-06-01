function StudentControllerMixin(BaseClass) {
  return class StudentController extends BaseClass {
    async getStatus() {
      try {
        const { data } = await this.api.get("/student/status", {});
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    async getFailedStudents() {
      const { data } = await this.api.get("/student/failed");
      return data;
    }
  };
}

export default StudentControllerMixin;
