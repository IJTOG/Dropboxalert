const userController = {
  async getById(req, res) {
    // res.status(200).json(getUserById(parseInt(req.params.id)));
    try {
    } catch (err) {
      res.status(500).send({ error: { message: err.message, code: err.code } });
    }
  },
  async test(req, res) {
    res.redirect("/home");
  },
  async createUser(req, res) {}
};
export default userController;
