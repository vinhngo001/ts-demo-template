import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import app from "./app";
import { createServer } from "http";

AppDataSource.initialize().then(async () => {
    const httpServer = createServer(app);
    httpServer.listen(3001, () => { console.log("Server listening on port 3001") });

}).catch(error => console.log(error))
