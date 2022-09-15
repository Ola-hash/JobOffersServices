export interface JobOfferModel {
  id: number;
  title: string;
  description: string;
  requirements: string;
  duties: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  dateAdded: Date;
  dateExpired: Date;
  companyName: string;
}
