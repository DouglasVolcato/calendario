export interface TaskInterface {
  id: string;
  name: string;
  description: string;
  deadline: Date;
  agreedDeadline: Date;
  urgency: string;
  gravity: string;
  tendency: string;
  legalDemand: boolean;
}
