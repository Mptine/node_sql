import { api } from "./api";
import type { Certificate } from "../../../shared/types";

export type PostCertificateInput = {
    equipment_id: string,
    created_at: string,
    inspector: string,
    project_id: string,
};

export type PostCertificateConv = {
    equipment_id: number;
    created_at: string;
    inspector: number;
    project_id: number;
  };
  

export type PostCertificateOutput = {
  success: boolean;
  certificate: Certificate;
};

export async function postCertificate(
    certificate: PostCertificateInput
): Promise<PostCertificateOutput> {

    const convertedCert: PostCertificateConv = {
        equipment_id: parseInt(certificate.equipment_id),
        created_at: certificate.created_at,
        inspector: parseInt(certificate.inspector),
        project_id: parseInt(certificate.project_id),
      };

  const response = await api.post("/certificates", convertedCert);
  return response.data;
}