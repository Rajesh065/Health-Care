import {
  Appointment,
  HospitalEquipment,
  WardBedAllocation,
  EmployeeLeaveRecord,
  SupplyItem,
  ManagerStats,
  MedicalDomain
} from '../types';

export const MEDICAL_DOMAINS: MedicalDomain[] = [
  {
    id: 'cardio',
    name: 'Cardiology & Heart Health',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    qualification: 'Senior Interventional Cardiologist',
    experienceYears: 16,
    chamberNumber: 'Chamber 204 (Wing B)',
    iconName: 'HeartPulse'
  },
  {
    id: 'neuro',
    name: 'Neurology & Spine Care',
    doctorName: 'Dr. David Kim, MD, PhD',
    qualification: 'Clinical Neurophysiologist & Spine Specialist',
    experienceYears: 14,
    chamberNumber: 'Chamber 108 (Wing A)',
    iconName: 'Brain'
  },
  {
    id: 'ortho',
    name: 'Orthopedics & Joint Replacement',
    doctorName: 'Dr. Sarah Jenkins, MD, FAAOS',
    qualification: 'Consultant Orthopedic & Arthroscopy Surgeon',
    experienceYears: 18,
    chamberNumber: 'Chamber 302 (Wing C)',
    iconName: 'Bone'
  },
  {
    id: 'pediatric',
    name: 'Pediatrics & Neonatal Care',
    doctorName: 'Dr. Emily Watson, MD, FAAP',
    qualification: 'Chief Pediatrician & Child Health Specialist',
    experienceYears: 12,
    chamberNumber: 'Chamber 104 (Child Wing)',
    iconName: 'Baby'
  },
  {
    id: 'onco',
    name: 'Oncology & Cancer Care',
    doctorName: 'Dr. Rajesh Patel, MD, FASCO',
    qualification: 'Senior Medical Oncologist',
    experienceYears: 20,
    chamberNumber: 'Chamber 401 (Oncology Center)',
    iconName: 'Activity'
  },
  {
    id: 'pulmo',
    name: 'Pulmonology & Respiratory Medicine',
    doctorName: 'Dr. Marcus Reed, MD, FCCP',
    qualification: 'Consultant Chest & Pulmonologist',
    experienceYears: 15,
    chamberNumber: 'Chamber 210 (Wing B)',
    iconName: 'Lungs'
  },
  {
    id: 'gastro',
    name: 'Gastroenterology & Liver Health',
    doctorName: 'Dr. Anita Desai, MD, FACG',
    qualification: 'Hepatologist & Endoscopist',
    experienceYears: 13,
    chamberNumber: 'Chamber 305 (Wing C)',
    iconName: 'Stethoscope'
  },
  {
    id: 'derma',
    name: 'Dermatology & Skin Care',
    doctorName: 'Dr. Laura Zhang, MD, FAAD',
    qualification: 'Consultant Dermatologist & Cosmetologist',
    experienceYears: 11,
    chamberNumber: 'Chamber 115 (Wing A)',
    iconName: 'Sparkles'
  }
];

const DEFAULT_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-101',
    tokenNumber: 'TK-101',
    appointmentType: 'SPECIALIST_CONSULTATION',
    patientName: 'Robert Chen',
    patientPhone: '+1 (555) 234-8901',
    patientAge: 52,
    patientGender: 'Male',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    department: 'Cardiology & Heart Health',
    qualification: 'Senior Interventional Cardiologist',
    date: 'Today',
    timeSlot: '10:00 AM',
    symptoms: 'Exertional chest tightness and shortness of breath on stairs',
    status: 'Accepted',
    prescription: 'Tab. Atorvastatin 20mg once daily at night. Tab. Metoprolol 25mg in morning. Repeat ECG next week.',
    createdAt: '1 hour ago'
  },
  {
    id: 'apt-102',
    tokenNumber: 'TK-102',
    appointmentType: 'GENERAL_OPD',
    patientName: 'Eleanor Vance',
    patientPhone: '+1 (555) 489-1120',
    patientAge: 64,
    patientGender: 'Female',
    doctorName: 'Hospital General OPD Physician',
    department: 'General Outpatient OPD',
    date: 'Today',
    timeSlot: '11:15 AM',
    symptoms: 'Routine blood pressure review & seasonal throat allergy',
    status: 'Waiting',
    createdAt: '40 mins ago'
  },
  {
    id: 'apt-103',
    tokenNumber: 'TK-103',
    appointmentType: 'SPECIALIST_CONSULTATION',
    patientName: 'David Miller',
    patientPhone: '+1 (555) 890-3341',
    patientAge: 38,
    patientGender: 'Male',
    doctorName: 'Dr. David Kim, MD, PhD',
    department: 'Neurology & Spine Care',
    qualification: 'Clinical Neurophysiologist',
    date: 'Today',
    timeSlot: '02:00 PM',
    symptoms: 'Severe unilateral cluster migraines with visual aura',
    status: 'Waiting',
    createdAt: '25 mins ago'
  }
];

const DEFAULT_EQUIPMENT: HospitalEquipment[] = [
  { id: 'EQ-01', name: 'Siemens Magnetom 3.0T MRI', model: 'Skyra 3T Multi-Channel', department: 'Radiology & Imaging', location: 'Basement Imaging Wing B', status: 'Operational', lastServiced: 'Aug 14, 2026', nextServiceDue: 'Nov 14, 2026', technicianInCharge: 'Eng. Ryan Cooper' },
  { id: 'EQ-02', name: 'GE Revolution 128-Slice CT Scanner', model: 'Revolution CT HD', department: 'Radiology & Trauma', location: 'Ground Floor Emergency Wing', status: 'Operational', lastServiced: 'Jul 28, 2026', nextServiceDue: 'Oct 28, 2026', technicianInCharge: 'Eng. Ryan Cooper' },
  { id: 'EQ-03', name: 'Dräger Evita V800 ICU Ventilators (x24)', model: 'Evita Infinity V800', department: 'Critical Care ICU', location: 'ICU North & ICU South (3rd Floor)', status: 'Operational', lastServiced: 'Aug 02, 2026', nextServiceDue: 'Sep 02, 2026', technicianInCharge: 'Biomed. Nathan Drake' },
  { id: 'EQ-04', name: 'Philips Azurion 7 Biplane Cath Lab', model: 'Azurion 7 C20', department: 'Cardiology OT', location: '2nd Floor OT Complex Suite 3', status: 'Operational', lastServiced: 'Aug 19, 2026', nextServiceDue: 'Nov 19, 2026', technicianInCharge: 'Eng. Ryan Cooper' },
  { id: 'EQ-05', name: 'Fresenius 5008S Dialysis Units (x12)', model: 'Cordiax 5008S', department: 'Renal Dialysis Center', location: '1st Floor Dialysis Wing', status: 'Maintenance Due', lastServiced: 'Jun 10, 2026', nextServiceDue: 'Aug 25, 2026 (Overdue 7 days)', technicianInCharge: 'Biomed. Nathan Drake' },
  { id: 'EQ-06', name: 'Stryker Mako Robotic Joint Arm', model: 'Mako Total Knee/Hip 3.2', department: 'Orthopedic Surgery', location: 'OT Suite 1 (Orthopedic)', status: 'Under Calibration', lastServiced: 'Aug 30, 2026', nextServiceDue: 'Sep 05, 2026 (Calibration in Progress)', technicianInCharge: 'Eng. Laura Kraft' }
];

const DEFAULT_WARD_BEDS: WardBedAllocation[] = [
  { id: 'WB-01', wardName: 'Intensive Care Unit (ICU North & South)', floor: 'Floor 3 (East Wing)', totalBeds: 30, occupiedBeds: 26, availableBeds: 4, headNurse: 'Sarah Connor, RN', ventilatorCount: 24 },
  { id: 'WB-02', wardName: 'Cardiac Step-Down & Telemetry', floor: 'Floor 2 (Wing B)', totalBeds: 45, occupiedBeds: 38, availableBeds: 7, headNurse: 'Jessica Alba, RN', ventilatorCount: 6 },
  { id: 'WB-03', wardName: 'Orthopedic & Post-Surgery Ward', floor: 'Floor 3 (Wing C)', totalBeds: 60, occupiedBeds: 52, availableBeds: 8, headNurse: 'Maria Rodriguez, RN', ventilatorCount: 4 },
  { id: 'WB-04', wardName: 'General Medical Inpatient Ward', floor: 'Floor 1 (Wings A & B)', totalBeds: 150, occupiedBeds: 134, availableBeds: 16, headNurse: 'David Hernandez, RN', ventilatorCount: 8 },
  { id: 'WB-05', wardName: 'Pediatrics & Neonatal NICU', floor: 'Floor 1 (Child Wing)', totalBeds: 40, occupiedBeds: 32, availableBeds: 8, headNurse: 'Amanda Clark, RN', ventilatorCount: 10 },
  { id: 'WB-06', wardName: 'Maternity & Gynecology Recovery', floor: 'Floor 2 (Wing A)', totalBeds: 50, occupiedBeds: 41, availableBeds: 9, headNurse: 'Helen Hayes, RN', ventilatorCount: 2 },
  { id: 'WB-07', wardName: 'Emergency Casualty & Triage Beds', floor: 'Ground Floor ER', totalBeds: 25, occupiedBeds: 18, availableBeds: 7, headNurse: 'Brian O\'Connor, RN', ventilatorCount: 12 },
  { id: 'WB-08', wardName: 'Day Care Surgery & Chemotherapy', floor: 'Floor 4 (Center Wing)', totalBeds: 50, occupiedBeds: 43, availableBeds: 7, headNurse: 'Rachel Adams, RN', ventilatorCount: 2 }
];

const DEFAULT_EMPLOYEE_LEAVES: EmployeeLeaveRecord[] = [
  { id: 'LV-101', employeeName: 'Dr. Marcus Reed, MD', role: 'Senior Pulmonologist', department: 'Pulmonology', leaveType: 'Conference', startDate: 'Today', endDate: 'Sep 04, 2026', reason: 'Attending International Respiratory & Chest Medicine Symposium in Chicago', substituteCover: 'Dr. Arthur Sterling (On-Call)', approvalStatus: 'Approved' },
  { id: 'LV-102', employeeName: 'Dr. Kevin O\'Connor, MD', role: 'Consultant Nephrologist', department: 'Renal Dialysis', leaveType: 'Medical', startDate: 'Today', endDate: 'Sep 03, 2026', reason: 'Post-dental surgery recovery and rest', substituteCover: 'Dr. David Kim (On-Call)', approvalStatus: 'Approved' },
  { id: 'LV-103', employeeName: 'Nurse Jennifer Lopez, BSN', role: 'Senior OT Scrub Nurse', department: 'Operation Theatres', leaveType: 'Casual', startDate: 'Today', endDate: 'Today Evening', reason: 'Family medical emergency', substituteCover: 'Nurse Clara Oswald, RN', approvalStatus: 'Approved' },
  { id: 'LV-104', employeeName: 'Robert Langdon', role: 'Biomedical Senior Technician', department: 'Biomedical Engineering', leaveType: 'Emergency', startDate: 'Sep 02, 2026', endDate: 'Sep 05, 2026', reason: 'Urgent family relocation matter', substituteCover: 'Biomed. Nathan Drake', approvalStatus: 'Pending Review' },
  { id: 'LV-105', employeeName: 'Michael Chang', role: 'Head Pharmacist', department: 'Central Inpatient Pharmacy', leaveType: 'Casual', startDate: 'Sep 03, 2026', endDate: 'Sep 06, 2026', reason: 'Annual scheduled personal leave', substituteCover: 'Pharmacist Susan Miller', approvalStatus: 'Pending Review' }
];

const DEFAULT_SUPPLIES: SupplyItem[] = [
  { id: 'SUP-01', itemName: 'Liquid Medical Oxygen (Cryogenic Tank)', category: 'Gas & Power', currentStock: '96% Tank Capacity (12,000 Liters)', status: 'Optimal', reorderLevel: '40%' },
  { id: 'SUP-02', itemName: 'Universal Blood Bank Units (O-Negative)', category: 'Blood Bank', currentStock: '28 Units (450ml Bags)', status: 'Adequate', reorderLevel: '10 Units' },
  { id: 'SUP-03', itemName: 'Sterile Surgical Glove Packs (Size 7.5 & 8.0)', category: 'Surgical & Consumables', currentStock: '1,450 Pairs', status: 'Optimal', reorderLevel: '300 Pairs' },
  { id: 'SUP-04', itemName: 'IV Normal Saline & Ringer Lactate (500ml)', category: 'Critical Medicine', currentStock: '820 Bottles', status: 'Optimal', reorderLevel: '200 Bottles' },
  { id: 'SUP-05', itemName: 'Emergency ICU Antibiotics (Meropenem 1g)', category: 'Critical Medicine', currentStock: '95 Vials', status: 'Reorder Soon', reorderLevel: '80 Vials' },
  { id: 'SUP-06', itemName: 'Dual Diesel Generator Backup Fuel', category: 'Gas & Power', currentStock: '100% Fuel Tank (72 Hours Continuous Backup)', status: 'Optimal', reorderLevel: '50%' }
];

const STORAGE_KEY_APTS = 'medflow_hospital_appointments_v10';
const STORAGE_KEY_LEAVES = 'medflow_hospital_leaves_v1';

function getApts(): Appointment[] {
  const saved = localStorage.getItem(STORAGE_KEY_APTS);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  localStorage.setItem(STORAGE_KEY_APTS, JSON.stringify(DEFAULT_APPOINTMENTS));
  return DEFAULT_APPOINTMENTS;
}

function saveApts(list: Appointment[]) {
  localStorage.setItem(STORAGE_KEY_APTS, JSON.stringify(list));
  window.dispatchEvent(new Event('medflow_live_update'));
}

function getLeaves(): EmployeeLeaveRecord[] {
  const saved = localStorage.getItem(STORAGE_KEY_LEAVES);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  localStorage.setItem(STORAGE_KEY_LEAVES, JSON.stringify(DEFAULT_EMPLOYEE_LEAVES));
  return DEFAULT_EMPLOYEE_LEAVES;
}

function saveLeaves(list: EmployeeLeaveRecord[]) {
  localStorage.setItem(STORAGE_KEY_LEAVES, JSON.stringify(list));
  window.dispatchEvent(new Event('medflow_live_update'));
}

export const api = {
  getAppointments: async (): Promise<Appointment[]> => {
    return getApts();
  },

  getSpecialistDomains: (): MedicalDomain[] => {
    return MEDICAL_DOMAINS;
  },

  bookGeneralAppointment: async (data: {
    patientName: string;
    patientAge: number;
    patientGender: 'Male' | 'Female' | 'Other';
    patientPhone: string;
    symptoms: string;
    timeSlot: string;
    date?: string;
  }): Promise<Appointment> => {
    const list = getApts();
    const token = `TK-${100 + list.length + 1}`;
    const newApt: Appointment = {
      id: `apt-${Date.now()}`,
      tokenNumber: token,
      appointmentType: 'GENERAL_OPD',
      patientName: data.patientName,
      patientPhone: data.patientPhone,
      patientAge: data.patientAge,
      patientGender: data.patientGender,
      doctorName: 'Hospital General OPD Duty Physician',
      department: 'General Medicine & OPD',
      date: data.date || 'Today',
      timeSlot: data.timeSlot,
      symptoms: data.symptoms,
      status: 'Waiting',
      createdAt: 'Just now'
    };
    saveApts([newApt, ...list]);
    return newApt;
  },

  bookSpecialistAppointment: async (data: {
    domainId: string;
    patientName: string;
    patientAge: number;
    patientGender: 'Male' | 'Female' | 'Other';
    patientPhone: string;
    symptoms: string;
    timeSlot: string;
    date?: string;
  }): Promise<Appointment> => {
    const list = getApts();
    const domain = MEDICAL_DOMAINS.find(d => d.id === data.domainId) || MEDICAL_DOMAINS[0];
    const token = `TK-${100 + list.length + 1}`;
    const newApt: Appointment = {
      id: `apt-${Date.now()}`,
      tokenNumber: token,
      appointmentType: 'SPECIALIST_CONSULTATION',
      patientName: data.patientName,
      patientPhone: data.patientPhone,
      patientAge: data.patientAge,
      patientGender: data.patientGender,
      doctorName: domain.doctorName,
      department: domain.name,
      qualification: domain.qualification,
      date: data.date || 'Today',
      timeSlot: data.timeSlot,
      symptoms: data.symptoms,
      status: 'Waiting',
      createdAt: 'Just now'
    };
    saveApts([newApt, ...list]);
    return newApt;
  },

  updateStatus: async (id: string, status: Appointment['status'], rejectionReason?: string): Promise<void> => {
    const list = getApts();
    const updated = list.map(a => {
      if (a.id === id) {
        return {
          ...a,
          status,
          rejectionReason: rejectionReason || a.rejectionReason
        };
      }
      return a;
    });
    saveApts(updated);
  },

  addPrescription: async (id: string, prescription: string): Promise<void> => {
    const list = getApts();
    const updated = list.map(a => a.id === id ? { ...a, prescription, status: 'Completed' as const } : a);
    saveApts(updated);
  },

  getEquipmentList: async (): Promise<HospitalEquipment[]> => {
    return DEFAULT_EQUIPMENT;
  },

  getWardBeds: async (): Promise<WardBedAllocation[]> => {
    return DEFAULT_WARD_BEDS;
  },

  getEmployeeLeaves: async (): Promise<EmployeeLeaveRecord[]> => {
    return getLeaves();
  },

  approveLeave: async (id: string): Promise<void> => {
    const list = getLeaves();
    const updated = list.map(l => l.id === id ? { ...l, approvalStatus: 'Approved' as const } : l);
    saveLeaves(updated);
  },

  getSupplies: async (): Promise<SupplyItem[]> => {
    return DEFAULT_SUPPLIES;
  },

  getManagerStats: async (): Promise<ManagerStats> => {
    const leaves = getLeaves();
    const activeLeavesCount = leaves.filter(l => l.approvalStatus === 'Approved').length;

    let totalBeds = 0;
    let occupiedBeds = 0;
    DEFAULT_WARD_BEDS.forEach(w => {
      totalBeds += w.totalBeds;
      occupiedBeds += w.occupiedBeds;
    });
    const availableBeds = totalBeds - occupiedBeds;

    const opCount = DEFAULT_EQUIPMENT.filter(e => e.status === 'Operational').length;
    const serviceCount = DEFAULT_EQUIPMENT.filter(e => e.status !== 'Operational').length;

    return {
      totalBeds,
      occupiedBeds,
      availableBeds,
      bedOccupancyPercent: Math.round((occupiedBeds / totalBeds) * 1000) / 10,
      totalEquipmentCount: DEFAULT_EQUIPMENT.length,
      operationalEquipmentCount: opCount,
      equipmentNeedsServiceCount: serviceCount,
      totalEmployeesCount: 142,
      employeesOnDutyCount: 142 - activeLeavesCount,
      employeesOnLeaveCount: activeLeavesCount,
      activeAmbulancesReady: 4,
      oxygenLevelPercent: 96,
      powerBackupStatus: '100% (Dual Diesel Gensets Standby)'
    };
  }
};
