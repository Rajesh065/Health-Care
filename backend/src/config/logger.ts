export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  AUDIT = 'AUDIT',
}

export const logger = {
  info: (msg: string, meta?: any) => {
    console.log(`[${new Date().toISOString()}] [INFO] ${msg}`, meta ? JSON.stringify(meta) : '');
  },
  warn: (msg: string, meta?: any) => {
    console.warn(`[${new Date().toISOString()}] [WARN] ${msg}`, meta ? JSON.stringify(meta) : '');
  },
  error: (msg: string, meta?: any) => {
    console.error(`[${new Date().toISOString()}] [ERROR] ${msg}`, meta ? JSON.stringify(meta) : '');
  },
  audit: (action: string, userId: string, patientId?: string, details?: any) => {
    console.log(`[${new Date().toISOString()}] [HIPAA-AUDIT] Action: ${action} | User: ${userId} | Patient: ${patientId || 'N/A'}`, details ? JSON.stringify(details) : '');
  }
};
