import { createServer } from "http";

import app from "./app";
const server = app.listen(3000, () => {
  console.log("App is running on port 3000");
});

export default server;
