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
  approvalStatus: 'Approved' | 'Pending Review';
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
  powerBackupStatus: string;
}
