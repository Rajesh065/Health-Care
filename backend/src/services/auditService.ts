import { mockDataStore } from '../models/mockData';
import { HipaaAuditLog } from '../models/types';

export class AuditService {
  static getLogs(limit: number = 100): HipaaAuditLog[] {
    return mockDataStore.auditLogs.slice(0, limit);
  }
}
