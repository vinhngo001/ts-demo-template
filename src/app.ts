import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello Coders X Tokyo</h1>");
});

app.get("/users/:id", async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const userRepo = AppDataSource.getRepository(User);
    const users = await userRepo.find({
        where: {
            id: id
        }
    });
    res.json({ success: true, message: "Success", data: users })
});

app.post("/users", async (req: Request, res: Response) => {
    const dataBody: { firstName: string | null, lastName: string | null, age: number | null } = req.body;
    const userRepo = AppDataSource.getRepository(User);
    const newUser = await userRepo.create(dataBody);
    await userRepo.save(newUser);
    res.json({ sucess: true, message: "Sucess", data: newUser })
    // const newUser = new User();
});

app.get("/users", async (req: Request, res: Response) => {
    const userRepo = await AppDataSource.getRepository(User);
    const users = await userRepo.find();
    res.json({ success: true, message: "Success", data: users });
})
export default app;