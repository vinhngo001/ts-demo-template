import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import app from "./app";
import { createServer } from "http";

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")
    
    const httpServer = createServer(app);
    httpServer.listen(3001, () => { console.log("Server listening on port 3001") });

}).catch(error => console.log(error))
