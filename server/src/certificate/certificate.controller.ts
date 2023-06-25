import express from "express";
import * as certificateService from "./certificate.service";

export const certificateController = express.Router();

// Show all certificates
certificateController.get("/", async (req, res) => {
  const equipments = await certificateService.findCertificates();
  res.status(200).json(equipments);
});

// GET method for a specific cert, by id.
certificateController.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const certificate = await certificateService.findCertificateById(id);
  if (certificate === null) {
    //404 Not Found
    res.sendStatus(404);
  } else {
    //200 OK: The request has succeeded
    res.status(200).json(certificate);
  }
});

certificateController.get("/search", async (req, res) => {
  const limit = req.query.limit ? Number(req.query.limit) : undefined;
  const offset = req.query.offset ? Number(req.query.offset) : undefined;
  const order_by = req.query.order_by as string | undefined;
  const direction = req.query.direction as string | undefined;
  const search =
    req.query.search !== undefined ? req.query.search.toString() : undefined;
  const certificates = await certificateService.CertificatesSearch({
    limit,
    offset,
    search,
    order_by,
    direction,
  });
  res.status(200).json(certificates);
});

certificateController.post("/", async (req, res) => {
  const response = await certificateService.createCertificate(req.body);
  const status = response.success ? 201 : 422;
  res.status(status).json(response);
});

certificateController.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const response = await certificateService.deleteCertificateById(id);
  res.status(200).json(response);
});
