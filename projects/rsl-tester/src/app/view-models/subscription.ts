export interface Subscription {
  id: string;
  name: string;
  cost: number;
  paymentFreq: string;
  features: string[];
  startDate: Date;
  nextBillingDate: Date;
  status: string;
}
