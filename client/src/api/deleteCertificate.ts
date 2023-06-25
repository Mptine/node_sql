import { api } from "./api";
import { Certificate } from "../../../shared/types";

export type DeleteCertificateOutput = {
  success: boolean;
  certificate: Certificate;
};

export async function deleteCertificate(id: number): Promise<DeleteCertificateOutput> {
  const res = await api.delete(`/certificates/${id}`);
  const certificate = res.data;
  return certificate;
}