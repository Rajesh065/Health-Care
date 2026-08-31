import { mockDataStore } from '../models/mockData';
export class LabService {
  static getAll() { return mockDataStore.labOrders; }
}
