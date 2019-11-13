import express from "express";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT || 3001;

mongoose.connect("mongodb://localhost/dropboxalert", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;

const setupRoutes = (App: express.Application) => {
  const APP_DIR = `${__dirname}/component`;
  const features = fs
    .readdirSync(APP_DIR)
    .filter(file => fs.statSync(`${APP_DIR}/${file}`).isDirectory());
  features.forEach(feature => {
    const router = express.Router();
    const routes = require(`${APP_DIR}/${feature}/routes`);
    routes.setup(router);
    App.use(`/api/${feature}`, router);
  });
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
setupRoutes(app);

// start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
