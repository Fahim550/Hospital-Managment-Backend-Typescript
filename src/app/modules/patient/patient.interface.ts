export interface TPatient {
  name: string;
  email: string;
  password: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  phone?: string;
  address?: string;
  isDeleted?: boolean;
}
