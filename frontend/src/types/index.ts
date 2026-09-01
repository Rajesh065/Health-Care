export type UserPersona = 'MANAGER' | 'EMPLOYEE' | 'RECEPTIONIST' | 'PATIENT';

export type AppointmentStatus = 'Waiting' | 'Accepted' | 'Completed' | 'Rejected';

export type AppointmentType = 'GENERAL_OPD' | 'SPECIALIST_CONSULTATION';

export interface MedicalDomain {
  id: string;
  name: string;
  doctorName: string;
  qualification: string;
  experienceYears: number;
  chamberNumber: string;
  iconName: string;
}

export interface HospitalUser {
  id: string;
  name: string;
  email: string;
  persona: UserPersona;
  role: string;
  department: string;
  employeeId?: string;
  shiftTiming?: string;
  password?: string;
  phone?: string;
}

export interface Appointment {
  id: string;
  tokenNumber: string;
  appointmentType: AppointmentType;
  patientName: string;
  patientPhone: string;
  patientAge: number;
  patientGender: 'Male' | 'Female' | 'Other';
  doctorName: string;
  department: string;
  qualification?: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  status: AppointmentStatus;
  rejectionReason?: string;
  prescription?: string;
  createdAt: string;
}

export interface HospitalEquipment {
  id: string;
  name: string;
  model: string;
  department: string;
  location: string;
  status: 'Operational' | 'Maintenance Due' | 'Under Calibration';
  lastServiced: string;
  nextServiceDue: string;
  technicianInCharge: string;
}

export interface WardBedAllocation {
  id: string;
  wardName: string;
  floor: string;
  totalBeds: number;
  occupiedBeds: number;
  availableBeds: number;
  headNurse: string;
  ventilatorCount: number;
}

export interface RoomBedDetail {
  id: string;
  floor: string;
  wardName: string;
  roomNumber: string;
  bedNumber: string;
  bedType: 'ICU Ventilator Bed' | 'Deluxe Private Bed' | 'Semi-Private Bed' | 'General Ward Bed' | 'Emergency Triage Bed';
  isOccupied: boolean;
  patientName?: string;
  patientAge?: number;
  patientGender?: string;
  admittedDate?: string;
  attendingDoctor?: string;
  diagnosis?: string;
}

export interface OTLiveOperation {
  id: string;
  procedureName: string;
  patientName: string;
  patientAge: number;
  primarySurgeon: string;
  otSuite: string;
  status: 'RUNNING' | 'UPCOMING' | 'COMPLETED';
  scheduledTime: string;
  durationMinutes: number;
  elapsedMinutes?: number;
  assistingTeam: string;
  clinicalNotes?: string;
}

export interface AmbulanceVehicle {
  id: string;
  vehicleNumber: string;
  type: 'Advanced Cardiac ICU Life Support (ACLS)' | 'Basic Life Support (BLS)' | 'Neonatal Emergency Transport';
  status: 'Standby' | 'In Transit (Emergency)' | 'Under Maintenance';
  driverName: string;
  paramedicLead: string;
  currentLocation: string;
  monthlyCostUSD: number;
  monthlyCostINR: number;
  fuelExpense: number;
  staffSalary: number;
  maintenanceExpense: number;
}

export interface BloodGroupStock {
  group: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  unitsAvailable: number;
  safeReserveTarget: number;
  status: 'Optimal' | 'Adequate' | 'Critical Shortage' | 'Depleted / Empty';
  urgentUnitsNeeded: number;
  urgentReason?: string;
}

export interface EmployeeLeaveRecord {
  id: string;
  employeeName: string;
  role: string;
  department: string;
  leaveType: 'Medical' | 'Casual' | 'Emergency' | 'Conference';
  startDate: string;
  endDate: string;
  reason: string;
  substituteCover: string;
  approvalStatus: 'Approved' | 'Rejected' | 'Pending Review';
  managerNote?: string;
  appliedDate: string;
}

export interface SurgeryRecord {
  id: string;
  patientName: string;
  patientAge: number;
  procedureName: string;
  otSuite: string;
  surgeryDate: string;
  durationMinutes: number;
  outcome: 'Successful Recovery' | 'Under Observation in Post-Op' | 'Stable';
  primarySurgeon: string;
  assistingTeam: string;
  notes: string;
}

export interface AttendanceDayRecord {
  date: string;
  day: string;
  shift: string;
  punchInTime: string;
  punchOutTime: string;
  status: 'Present' | 'On Leave' | 'Off-Duty Rest';
  hoursWorked: number;
  departmentFloor: string;
}

export interface SupplyItem {
  id: string;
  itemName: string;
  category: 'Critical Medicine' | 'Surgical & Consumables' | 'Blood Bank' | 'Gas & Power';
  currentStock: string;
  status: 'Adequate' | 'Reorder Soon' | 'Optimal';
  reorderLevel: string;
}

export interface ManagerStats {
  totalBeds: number;
  occupiedBeds: number;
  availableBeds: number;
  bedOccupancyPercent: number;
  totalEquipmentCount: number;
  operationalEquipmentCount: number;
  equipmentNeedsServiceCount: number;
  totalEmployeesCount: number;
  employeesOnDutyCount: number;
  employeesOnLeaveCount: number;
  activeAmbulancesReady: number;
  oxygenLevelPercent: number;
  runningOperationsCount: number;
  upcomingOperationsCount: number;
  completedOperationsCount: number;
  totalAmbulanceMonthlyCostUSD: number;
  totalAmbulanceMonthlyCostINR: number;
}
