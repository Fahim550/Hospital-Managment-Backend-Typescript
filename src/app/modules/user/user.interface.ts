export interface Tpatient {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: "patient" | "doctor" | "admin";
  isDeleted: boolean;
}
