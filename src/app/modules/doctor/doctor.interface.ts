export interface Tdoctor {
  name: string;
  email: string;
  password?: string;
  image: string;
  graduation: string;
  specilities:
    | "Child-Care"
    | "Diabetes"
    | "Gynae"
    | "Kidny"
    | "Psychology"
    | "Skin"
    | "Orthopedics"
    | "General-Physician";
  workDetails: string;
  experience: string;
  consultationFee: string;
  phone: string;
  gender?: "Male" | "Female" | "Other";
  isDeleted?: boolean;
}
