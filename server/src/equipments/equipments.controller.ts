import express from "express";
import * as equipmentservice from "./equipments.service";
import { Equipments } from "../../../shared/types";

export const equipmentsController = express.Router();
// Change this so it shows only the equipments table.
equipmentsController.get("/", async (req, res) => {
  const equipments = await equipmentservice.findEquipments();
  res.status(200)
  return res.json(equipments)

});
//Temporary fix
equipmentsController.get("/simple", async (req, res) => {
  const equipments = await equipmentservice.findEquipmentsSimple();
  res.status(200)
  return res.json(equipments)

});


equipmentsController.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const equipments = await equipmentservice.findEquipmentsById(id);
  if (equipments === null) {
    //404 Not Found
    res.sendStatus(404);
  } else {
    //200 OK: The request has succeeded
    res.status(200).json(equipments);
  }
});

equipmentsController.post("/", async (req, res) => {
const response = await equipmentservice.createEquipments(req.body);
const status = response.success ? 201 : 422;
res.status(status).json(response);
});


equipmentsController.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const response = await equipmentservice.deleteEquipmentsById(id);
  res.status(200).json(response);
});

