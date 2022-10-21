export interface TaskInterface {
  id?: string;
  name: string;
  description: string;
  deadline: string;
  agreedDeadline: string;
  urgency: string;
  gravity: string;
  tendency: string;
  legalDemand: boolean;
}
