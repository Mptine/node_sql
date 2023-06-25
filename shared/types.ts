export type Equipments = {
  id: number;
  owner_id: number;
  equipment_class: number;
  load_capacity: number;
  division: string;
  sector: string;
  powered_by: string;
  transmited_by: string;
  is_mobile: boolean;
  load_unit: string;
  created_at: number;
  equipment_id: number;
  inspector: number;
  project_id: number;
  started_at: number;
  finished_at: number;
  client_id: number;
  type: string;
  email: string;
  phone: string;
  work_at: number;
  department: string,
  company: string;
  branch: string
};

export type fulaninho = {
  teste: number
}

export type EquipmentsSimple = {
  id: number;
  owner_id: number;
  equipment_class: number;
  load_capacity: number;
  division: string;
  sector: string;
};

export type Class = {
  id: number;
  powered_by: string;
  transmited_by: string;
  is_mobile: boolean;
  load_unit: string;
};

export type Certificate = {
  id: number;
  created_at: string;
  equipment_id: number;
  inspector: number;
  project_id: number;
};

export type Project = {
  id: number;
  started_at: string;
  finished_at: string;
  client_id: number;

};

export type User = {
  id: number;
  type: string;
  email: string;
  phone: string;
  work_at: number;
  department: string;
  sector: string;
};

export type Company = {
  id: number;
  company: string;
  branch: string;

};

export type QueryParam = {
  table: string;
  fields_values: string[];
}