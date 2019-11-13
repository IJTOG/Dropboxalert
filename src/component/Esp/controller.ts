const userController = {
  async addById(req, res) {
    console.log(req.params.id)
    res.status(200).json({name:"2"})
  }
};
export default userController;
