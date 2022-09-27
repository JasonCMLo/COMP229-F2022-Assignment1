import debug from "debug";
debug("comp-229");
import app from "./app/app.js";

import http from "http";

const server = http.createServer(app);

server.listen(3000);
