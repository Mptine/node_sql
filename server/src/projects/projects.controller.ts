import express from "express";
import * as projectsService from "./projects.service";

export const projectsController = express.Router();


// Show all certificates
projectsController.get("/", async (req, res) => {
  const projects = await projectsService.findProjects();
  res.status(200).json(projects);
});

projectsController.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const projects = await projectsService.findProjectById(id);
  if (projects === null) {
    //404 Not Found
    res.sendStatus(404);
  } else {
    //200 OK: The request has succeeded
    res.status(200).json(projects);
  }
});

//Dont want my user creating and deleting those...so no post and delete routes here.
//I should probably return some error or return some http...but i'll leave future me handle that.

