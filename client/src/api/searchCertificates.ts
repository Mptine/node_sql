import { Certificate } from "../../../shared/types";
import { api } from "./api";

type GetCertificatesInput = {
  limit?: number;
  offset?: number;
  search?: string;
  order_by?: string;
  direction?: string;
};

type GetCertificatesOutput = {
  count: number;
  certificates: Certificate[];
};

export async function searchCertificates(
  params: GetCertificatesInput = {}
): Promise<GetCertificatesOutput> {
  const res = await api.get("/certificate/search", {
    params,
  });
  const certificates = res.data;
  return certificates;
}
