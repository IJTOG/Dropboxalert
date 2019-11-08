const userController = {
  async getById(req, res) {
    res.status(200).json({ name: "Got" });
  },
  async test(req, res) {
    res.redirect("/home");
  }
};
export default userController;
