import { mockDataStore } from '../models/mockData';
import { Invoice, InsuranceClaim } from '../models/types';

export class BillingService {
  static getInvoices(): Invoice[] {
    return mockDataStore.invoices;
  }

  static getClaims(): InsuranceClaim[] {
    return mockDataStore.insuranceClaims;
  }

  static createInvoice(data: Omit<Invoice, 'id' | 'invoiceNumber' | 'issuedDate' | 'status'>): Invoice {
    const invoice: Invoice = {
      ...data,
      id: 'inv-' + Date.now(),
      invoiceNumber: 'INV-2026-' + Math.floor(1000 + Math.random() * 9000),
      issuedDate: new Date().toISOString(),
      status: data.balanceDue === 0 ? 'PAID' : 'ISSUED'
    };
    mockDataStore.invoices.unshift(invoice);
    return invoice;
  }

  static payInvoice(id: string, amount: number, paymentMethod: Invoice['paymentMethod']): Invoice | null {
    const invoice = mockDataStore.invoices.find(i => i.id === id);
    if (!invoice) return null;
    invoice.amountPaid += amount;
    invoice.balanceDue = Math.max(0, invoice.balanceDue - amount);
    invoice.paymentMethod = paymentMethod;
    if (invoice.balanceDue === 0) invoice.status = 'PAID';
    return invoice;
  }
}
