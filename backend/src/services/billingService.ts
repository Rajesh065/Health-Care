import { mockDataStore } from '../models/mockData';
export class BillingService {
  static getInvoices() { return mockDataStore.invoices; }
  static getClaims() { return mockDataStore.insuranceClaims; }
}
