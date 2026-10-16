import app  from "./app/app.js";
import  { createServer} from "node:http";
import {} from "socket.io"

const httpserver = createServer(app);

httpserver.listen(3000, () => {
    console.log("Server is running on port 3000");
});
