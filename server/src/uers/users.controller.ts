import express from "express";
import * as usersService from "./users.service";

export const usersController = express.Router();


// Show all certificates
usersController.get("/", async (req, res) => {
  const users = await usersService.findUsers();
  res.status(200).json(users);
});

usersController.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const users = await usersService.findUserById(id);
  if (users === null) {
    //404 Not Found
    res.sendStatus(404);
  } else {
    //200 OK: The request has succeeded
    res.status(200).json(users);
  }
});

//Dont want my user creating and deleting those...so no post and delete routes here.
//I should probably return some error or return some http...but i'll leave future me handle that.

