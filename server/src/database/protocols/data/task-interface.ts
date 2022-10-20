export interface TaskInterface {
  id: string;
  name: string;
  description: string;
  deadline: string | Date;
  agreedDeadline: string | Date;
  urgency: string;
  gravity: string;
  tendency: string;
  legalDemand: boolean;
}
