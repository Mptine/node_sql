import express  from "express";
import { equipmentsController } from "./equipments/equipments.controller";
import { certificateController } from "./certificate/certificate.controller";
import { eclassController } from "./eclass/eclass.controller";
import cors from "cors";
import { projectsController } from "./projects/projects.controller";
import { usersController } from "./uers/users.controller";

const app = express();
const host = "localhost";
const port = 8080;


app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.static("public"));
app.use(express.json());
app.use("/equipments", equipmentsController);
app.use("/certificates", certificateController);
app.use("/class", eclassController);
app.use("/projects", projectsController);
app.use("/users", usersController);

app.listen(port, host, () => {
    console.log(`The Express server is listening at http://${host}:${port}`);

});
