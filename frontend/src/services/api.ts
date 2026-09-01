import {
  Appointment,
  HospitalEquipment,
  WardBedAllocation,
  EmployeeLeaveRecord,
  SurgeryRecord,
  AttendanceDayRecord,
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
    doctorName: 'Dr. Sarah Jenkins, MD, FAAOS',
    department: 'Orthopedics & Joint Replacement',
    qualification: 'Consultant Orthopedic & Arthroscopy Surgeon',
    date: 'Today',
    timeSlot: '10:00 AM',
    symptoms: 'Right knee acute meniscus tear and severe pain while walking',
    status: 'Accepted',
    prescription: 'Tab. Aceclofenac 100mg twice daily after food. Tab. Pantoprazole 40mg before breakfast. Ice compression & knee brace advised.',
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
    doctorName: 'Dr. Sarah Jenkins, MD, FAAOS',
    department: 'Orthopedics & Joint Replacement',
    qualification: 'Consultant Orthopedic Surgeon',
    date: 'Today',
    timeSlot: '02:00 PM',
    symptoms: 'Post-fracture stiffness in left wrist and radius bone evaluation',
    status: 'Waiting',
    createdAt: '25 mins ago'
  }
];

const DEFAULT_EMPLOYEE_SURGERIES: SurgeryRecord[] = [
  {
    id: 'SURG-401',
    patientName: 'Karen White',
    patientAge: 42,
    procedureName: 'Arthroscopic ACL Reconstruction & Meniscus Repair',
    otSuite: 'OT Suite 1 (Orthopedic Robotics)',
    surgeryDate: 'Today (08:30 AM - 10:45 AM)',
    durationMinutes: 135,
    outcome: 'Successful Recovery',
    primarySurgeon: 'Dr. Sarah Jenkins, MD',
    assistingTeam: 'Dr. James Ford (Anesthesiologist), Nurse Jennifer Lopez (Scrub Lead)',
    notes: 'Anterior cruciate ligament graft secured with bio-absorbable screws. Full knee range motion verified post-fixation.'
  },
  {
    id: 'SURG-402',
    patientName: 'Thomas Anderson',
    patientAge: 59,
    procedureName: 'Robotic Total Knee Arthroplasty (Right Leg)',
    otSuite: 'OT Suite 1 (Orthopedic Robotics)',
    surgeryDate: 'Yesterday (01:15 PM - 03:30 PM)',
    durationMinutes: 135,
    outcome: 'Successful Recovery',
    primarySurgeon: 'Dr. Sarah Jenkins, MD',
    assistingTeam: 'Dr. Maya Lin (Cardiac Clearance), Nurse Clara Oswald',
    notes: 'Implant alignment within 0.5 degrees via Stryker Mako robotic arm. Minimum blood loss, shifted to recovery ward.'
  },
  {
    id: 'SURG-403',
    patientName: 'Samuel Jackson',
    patientAge: 68,
    procedureName: 'Bilateral Hip Joint Resurfacing & Decompression',
    otSuite: 'OT Suite 2 (General Trauma)',
    surgeryDate: 'Aug 29, 2026',
    durationMinutes: 160,
    outcome: 'Successful Recovery',
    primarySurgeon: 'Dr. Sarah Jenkins, MD',
    assistingTeam: 'Anesthesia Team Bravo',
    notes: 'Ceramic on poly bearings seated with press-fit femoral stem. Stable vitals.'
  },
  {
    id: 'SURG-404',
    patientName: 'Rachel Green',
    patientAge: 31,
    procedureName: 'Rotator Cuff Tendon Micro-Repair (Left Shoulder)',
    otSuite: 'OT Suite 1 (Orthopedic Robotics)',
    surgeryDate: 'Aug 27, 2026',
    durationMinutes: 90,
    outcome: 'Successful Recovery',
    primarySurgeon: 'Dr. Sarah Jenkins, MD',
    assistingTeam: 'Nurse Sarah Connor',
    notes: 'Shoulder subacromial decompression completed. Arm immobilizer applied.'
  }
];

const DEFAULT_ATTENDANCE_LOGS: AttendanceDayRecord[] = [
  { date: 'Sep 01, 2026 (Today)', day: 'Monday', shift: 'Morning OT Shift (08:00 AM - 04:30 PM)', punchInTime: '07:52 AM', punchOutTime: 'Active On-Duty', status: 'Present', hoursWorked: 8.5, departmentFloor: 'Floor 3 (OT Complex Suite 1)' },
  { date: 'Aug 31, 2026', day: 'Sunday', shift: 'On-Call Emergency Trauma Shift', punchInTime: '08:00 AM', punchOutTime: '04:15 PM', status: 'Present', hoursWorked: 8.25, departmentFloor: 'Ground Floor ER & Trauma' },
  { date: 'Aug 30, 2026', day: 'Saturday', shift: 'Morning Clinical OPD & Ward Rounds', punchInTime: '08:10 AM', punchOutTime: '02:30 PM', status: 'Present', hoursWorked: 6.3, departmentFloor: 'Floor 3 (Wing C Ortho Ward)' },
  { date: 'Aug 29, 2026', day: 'Friday', shift: 'Major Surgery OT Shift', punchInTime: '07:45 AM', punchOutTime: '05:00 PM', status: 'Present', hoursWorked: 9.25, departmentFloor: 'Floor 3 (OT Suite 2)' },
  { date: 'Aug 28, 2026', day: 'Thursday', shift: 'Weekly Scheduled Off-Duty Rest', punchInTime: '--', punchOutTime: '--', status: 'Off-Duty Rest', hoursWorked: 0, departmentFloor: 'Weekly Rest' },
  { date: 'Aug 27, 2026', day: 'Wednesday', shift: 'Morning OT & Afternoon OPD', punchInTime: '07:55 AM', punchOutTime: '04:45 PM', status: 'Present', hoursWorked: 8.8, departmentFloor: 'Floor 3 (OT Suite 1)' },
  { date: 'Aug 26, 2026', day: 'Tuesday', shift: 'Regular Surgery Shift', punchInTime: '08:00 AM', punchOutTime: '04:30 PM', status: 'Present', hoursWorked: 8.5, departmentFloor: 'Floor 3 (Wing C)' }
];

const DEFAULT_EMPLOYEE_LEAVES: EmployeeLeaveRecord[] = [
  { id: 'LV-101', employeeName: 'Dr. Sarah Jenkins, MD', role: 'Senior Consultant Orthopedic Surgeon', department: 'Orthopedics', leaveType: 'Conference', startDate: 'Sep 10, 2026', endDate: 'Sep 12, 2026', reason: 'Attending Global Orthopedic Robotics & Joint Replacement Congress in Boston', substituteCover: 'Dr. Kevin O\'Connor (On-Call)', approvalStatus: 'Approved', appliedDate: 'Aug 28, 2026' },
  { id: 'LV-102', employeeName: 'Dr. Marcus Reed, MD', role: 'Senior Pulmonologist', department: 'Pulmonology', leaveType: 'Conference', startDate: 'Today', endDate: 'Sep 04, 2026', reason: 'Attending International Respiratory & Chest Medicine Symposium in Chicago', substituteCover: 'Dr. Arthur Sterling (On-Call)', approvalStatus: 'Approved', appliedDate: 'Aug 25, 2026' },
  { id: 'LV-103', employeeName: 'Nurse Jennifer Lopez, BSN', role: 'Senior OT Scrub Nurse', department: 'Operation Theatres', leaveType: 'Casual', startDate: 'Today', endDate: 'Today Evening', reason: 'Family medical emergency', substituteCover: 'Nurse Clara Oswald, RN', approvalStatus: 'Approved', appliedDate: 'Aug 31, 2026' },
  { id: 'LV-104', employeeName: 'Robert Langdon', role: 'Biomedical Senior Technician', department: 'Biomedical Engineering', leaveType: 'Emergency', startDate: 'Sep 02, 2026', endDate: 'Sep 05, 2026', reason: 'Urgent family relocation matter', substituteCover: 'Biomed. Nathan Drake', approvalStatus: 'Pending Review', appliedDate: 'Aug 30, 2026' }
];

const STORAGE_KEY_APTS = 'medflow_hospital_appointments_v11';
const STORAGE_KEY_LEAVES = 'medflow_hospital_leaves_v2';

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

  getEmployeeSurgeries: async (): Promise<SurgeryRecord[]> => {
    return DEFAULT_EMPLOYEE_SURGERIES;
  },

  getEmployeeAttendance: async (): Promise<AttendanceDayRecord[]> => {
    return DEFAULT_ATTENDANCE_LOGS;
  },

  applyLeave: async (data: {
    employeeName: string;
    role: string;
    department: string;
    leaveType: 'Medical' | 'Casual' | 'Emergency' | 'Conference';
    startDate: string;
    endDate: string;
    reason: string;
    substituteCover: string;
  }): Promise<EmployeeLeaveRecord> => {
    const list = getLeaves();
    const newLeave: EmployeeLeaveRecord = {
      id: `LV-${Date.now().toString().slice(-4)}`,
      employeeName: data.employeeName,
      role: data.role,
      department: data.department,
      leaveType: data.leaveType,
      startDate: data.startDate,
      endDate: data.endDate,
      reason: data.reason,
      substituteCover: data.substituteCover,
      approvalStatus: 'Pending Review',
      appliedDate: 'Just now'
    };
    saveLeaves([newLeave, ...list]);
    return newLeave;
  },

  getEmployeeLeaves: async (): Promise<EmployeeLeaveRecord[]> => {
    return getLeaves();
  },

  approveLeave: async (id: string): Promise<void> => {
    const list = getLeaves();
    const updated = list.map(l => l.id === id ? { ...l, approvalStatus: 'Approved' as const } : l);
    saveLeaves(updated);
  }
};
