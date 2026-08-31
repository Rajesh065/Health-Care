import { mockDataStore } from '../models/mockData';
import { Bed, StaffShift } from '../models/types';

export class HospitalService {
  static getBeds(): Bed[] {
    return mockDataStore.beds;
  }

  static getOccupancyStats() {
    const total = mockDataStore.beds.length;
    const occupied = mockDataStore.beds.filter(b => b.isOccupied).length;
    const icuTotal = mockDataStore.beds.filter(b => b.wardType === 'ICU').length;
    const icuOccupied = mockDataStore.beds.filter(b => b.wardType === 'ICU' && b.isOccupied).length;

    return {
      totalBeds: total,
      occupiedBeds: occupied,
      occupancyRate: total > 0 ? Math.round((occupied / total) * 100) : 0,
      icuOccupancyRate: icuTotal > 0 ? Math.round((icuOccupied / icuTotal) * 100) : 0
    };
  }

  static getStaffShifts(): StaffShift[] {
    return mockDataStore.staffShifts;
  }
}
