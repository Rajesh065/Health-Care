import { mockDataStore } from '../models/mockData';
import { LabOrder } from '../models/types';

export class LabService {
  static getAll(status?: LabOrder['status']): LabOrder[] {
    if (!status) return mockDataStore.labOrders;
    return mockDataStore.labOrders.filter(l => l.status === status);
  }

  static getById(id: string): LabOrder | null {
    return mockDataStore.labOrders.find(l => l.id === id) || null;
  }

  static createOrder(data: Omit<LabOrder, 'id' | 'orderNumber' | 'orderedAt' | 'status'>): LabOrder {
    const order: LabOrder = {
      ...data,
      id: 'lab-' + Date.now(),
      orderNumber: 'LAB-2026-' + Math.floor(1000 + Math.random() * 9000),
      orderedAt: new Date().toISOString(),
      status: 'ORDERED'
    };
    mockDataStore.labOrders.unshift(order);
    return order;
  }

  static updateResults(id: string, results: NonNullable<LabOrder['results']>, technicianName: string): LabOrder | null {
    const order = this.getById(id);
    if (!order) return null;
    order.results = results;
    order.technicianName = technicianName;
    order.status = 'COMPLETED';
    order.completedAt = new Date().toISOString();
    return order;
  }
}
