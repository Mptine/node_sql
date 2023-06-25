import express from "express";
import * as eclassService from "./eclass.service";

export const eclassController = express.Router();


// Show all certificates
eclassController.get("/", async (req, res) => {
  const eclass = await eclassService.findEclass();
  res.status(200).json(eclass);
});

eclassController.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const eclass = await eclassService.findEclassById(id);
  if (eclass === null) {
    //404 Not Found
    res.sendStatus(404);
  } else {
    //200 OK: The request has succeeded
    res.status(200).json(eclass);
  }
});

//Dont want my user creating and deleting those...so no post and delete routes here.
//I should probably return some error or return some http...but i'll leave future me handle that.

