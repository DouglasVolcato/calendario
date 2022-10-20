import express, { Router } from "express";
import cors from "cors";
import { makeAreaFactory } from "./src/factories/area-factory";
import { makeTaskFactory } from "./src/factories/task-factory";

const app = express();
const router = Router();

const areaFactory = makeAreaFactory(router);
const taskFactory = makeTaskFactory(router);

app.use(express.json());
app.use(cors());

app.use("/area", areaFactory.route());
app.use("/task", taskFactory.route());

const port = 3002;
app.listen(port, () => console.log(`Server running at port ${port}`));
