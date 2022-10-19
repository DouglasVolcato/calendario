import express, { Request } from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = 3002;
app.listen(port, () => console.log(`Server running at port ${port}`));
