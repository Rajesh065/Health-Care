import { mockDataStore } from '../models/mockData';
export class AuditService { static getLogs(limit: number = 100) { return mockDataStore.auditLogs.slice(0, limit); } }
