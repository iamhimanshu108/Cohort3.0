import app from "./app/app.js";
import { createServer } from "node:http"
import initiazeSocket from "./socket/socket.server.js";

const httpServer = createServer(app);
initiazeSocket(httpServer);

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
