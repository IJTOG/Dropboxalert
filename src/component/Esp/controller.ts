const userController = {
  async getById(req, res) {
    // res.status(200).json(getUserById(parseInt(req.params.id)));
  },
  async test(req, res) {
    res.redirect("/home");
  }
};
export default userController;
