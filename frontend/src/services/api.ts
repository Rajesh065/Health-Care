import {
  Appointment,
  HospitalEquipment,
  WardBedAllocation,
  RoomBedDetail,
  OTLiveOperation,
  AmbulanceVehicle,
  BloodGroupStock,
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
    iconName: 'Droplet'
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

// 1. Room-Level Bed Layout (Filled vs Kaliga / Available)
const DEFAULT_ROOM_BEDS: RoomBedDetail[] = [
  // Ground Floor: ER Casualty & Triage
  { id: 'BD-G01', floor: 'Ground Floor', wardName: 'Emergency & Trauma Triage', roomNumber: 'ER Bay 01', bedNumber: 'Bed G-01', bedType: 'Emergency Triage Bed', isOccupied: true, patientName: 'Arthur Morgan', patientAge: 45, patientGender: 'Male', admittedDate: 'Today 07:30 AM', attendingDoctor: 'Dr. Marcus Sterling (ER Lead)', diagnosis: 'Acute Polytrauma & Fracture' },
  { id: 'BD-G02', floor: 'Ground Floor', wardName: 'Emergency & Trauma Triage', roomNumber: 'ER Bay 01', bedNumber: 'Bed G-02', bedType: 'Emergency Triage Bed', isOccupied: false },
  { id: 'BD-G03', floor: 'Ground Floor', wardName: 'Emergency & Trauma Triage', roomNumber: 'ER Bay 02', bedNumber: 'Bed G-03', bedType: 'Emergency Triage Bed', isOccupied: true, patientName: 'Sita Ramamurthy', patientAge: 62, patientGender: 'Female', admittedDate: 'Today 09:15 AM', attendingDoctor: 'Dr. Maya Lin (Cardiology)', diagnosis: 'Unstable Angina & Chest Pain' },
  { id: 'BD-G04', floor: 'Ground Floor', wardName: 'Emergency & Trauma Triage', roomNumber: 'ER Bay 02', bedNumber: 'Bed G-04', bedType: 'Emergency Triage Bed', isOccupied: false },

  // Floor 1: General Medical & Pediatrics
  { id: 'BD-101', floor: 'Floor 1 (Wing A)', wardName: 'General Inpatient Medicine', roomNumber: 'Room 101', bedNumber: 'Bed 101-A', bedType: 'General Ward Bed', isOccupied: true, patientName: 'Michael Chang', patientAge: 51, patientGender: 'Male', admittedDate: 'Aug 29, 2026', attendingDoctor: 'Dr. David Kim', diagnosis: 'Severe Bronchial Infection' },
  { id: 'BD-102', floor: 'Floor 1 (Wing A)', wardName: 'General Inpatient Medicine', roomNumber: 'Room 101', bedNumber: 'Bed 101-B', bedType: 'General Ward Bed', isOccupied: false },
  { id: 'BD-103', floor: 'Floor 1 (Wing A)', wardName: 'General Inpatient Medicine', roomNumber: 'Room 102', bedNumber: 'Bed 102-A', bedType: 'Deluxe Private Bed', isOccupied: true, patientName: 'Lakshmi Narayana', patientAge: 70, patientGender: 'Male', admittedDate: 'Aug 30, 2026', attendingDoctor: 'Dr. Anita Desai', diagnosis: 'Hepatic Recovery & Jaundice' },
  { id: 'BD-104', floor: 'Floor 1 (Child Wing)', wardName: 'Pediatrics NICU/PICU', roomNumber: 'Room 104 (NICU)', bedNumber: 'Bed P-01', bedType: 'ICU Ventilator Bed', isOccupied: true, patientName: 'Baby of Kavya', patientAge: 1, patientGender: 'Female', admittedDate: 'Aug 31, 2026', attendingDoctor: 'Dr. Emily Watson', diagnosis: 'Neonatal Phototherapy' },
  { id: 'BD-105', floor: 'Floor 1 (Child Wing)', wardName: 'Pediatrics NICU/PICU', roomNumber: 'Room 104 (NICU)', bedNumber: 'Bed P-02', bedType: 'ICU Ventilator Bed', isOccupied: false },

  // Floor 2: Cardiac Telemetry & Maternity
  { id: 'BD-201', floor: 'Floor 2 (Wing B)', wardName: 'Cardiac Step-Down Telemetry', roomNumber: 'Room 201', bedNumber: 'Bed 201-A', bedType: 'Deluxe Private Bed', isOccupied: true, patientName: 'James Rodriguez', patientAge: 58, patientGender: 'Male', admittedDate: 'Aug 28, 2026', attendingDoctor: 'Dr. Maya Lin', diagnosis: 'Post-Angioplasty Stent Recovery' },
  { id: 'BD-202', floor: 'Floor 2 (Wing B)', wardName: 'Cardiac Step-Down Telemetry', roomNumber: 'Room 201', bedNumber: 'Bed 201-B', bedType: 'Semi-Private Bed', isOccupied: false },
  { id: 'BD-203', floor: 'Floor 2 (Wing A)', wardName: 'Maternity Recovery Wing', roomNumber: 'Room 205', bedNumber: 'Bed 205-A', bedType: 'Deluxe Private Bed', isOccupied: true, patientName: 'Deepa Sharma', patientAge: 29, patientGender: 'Female', admittedDate: 'Yesterday 11:00 PM', attendingDoctor: 'Dr. Emily Watson', diagnosis: 'Normal Delivery Post-Natal' },
  { id: 'BD-204', floor: 'Floor 2 (Wing A)', wardName: 'Maternity Recovery Wing', roomNumber: 'Room 205', bedNumber: 'Bed 205-B', bedType: 'Deluxe Private Bed', isOccupied: false },

  // Floor 3: ICU North/South & Orthopedics
  { id: 'BD-301', floor: 'Floor 3 (East Wing)', wardName: 'Critical Care ICU Complex', roomNumber: 'ICU Pod 01', bedNumber: 'ICU Bed 01', bedType: 'ICU Ventilator Bed', isOccupied: true, patientName: 'George William', patientAge: 73, patientGender: 'Male', admittedDate: 'Aug 27, 2026', attendingDoctor: 'Dr. Marcus Reed (ICU In-Charge)', diagnosis: 'Severe ARDS & Sepsis Support' },
  { id: 'BD-302', floor: 'Floor 3 (East Wing)', wardName: 'Critical Care ICU Complex', roomNumber: 'ICU Pod 01', bedNumber: 'ICU Bed 02', bedType: 'ICU Ventilator Bed', isOccupied: false },
  { id: 'BD-303', floor: 'Floor 3 (Wing C)', wardName: 'Orthopedic Post-Op Ward', roomNumber: 'Room 302', bedNumber: 'Bed 302-A', bedType: 'Semi-Private Bed', isOccupied: true, patientName: 'Thomas Anderson', patientAge: 59, patientGender: 'Male', admittedDate: 'Yesterday 04:00 PM', attendingDoctor: 'Dr. Sarah Jenkins', diagnosis: 'Robotic Knee Replacement Post-Op' },
  { id: 'BD-304', floor: 'Floor 3 (Wing C)', wardName: 'Orthopedic Post-Op Ward', roomNumber: 'Room 302', bedNumber: 'Bed 302-B', bedType: 'Semi-Private Bed', isOccupied: false },

  // Floor 4: Day Care & Chemotherapy
  { id: 'BD-401', floor: 'Floor 4 (Center Wing)', wardName: 'Day Care Surgery & Oncology', roomNumber: 'Room 401', bedNumber: 'Chemo Chair 01', bedType: 'General Ward Bed', isOccupied: true, patientName: 'Ananya Roy', patientAge: 48, patientGender: 'Female', admittedDate: 'Today 08:00 AM', attendingDoctor: 'Dr. Rajesh Patel', diagnosis: 'Cycle 4 Infusion Chemotherapy' },
  { id: 'BD-402', floor: 'Floor 4 (Center Wing)', wardName: 'Day Care Surgery & Oncology', roomNumber: 'Room 401', bedNumber: 'Chemo Chair 02', bedType: 'General Ward Bed', isOccupied: false }
];

// 2. Live OT Operations (Running Now, Upcoming Today, Completed Today)
const DEFAULT_OT_OPERATIONS: OTLiveOperation[] = [
  // Running Now (Live in OT)
  {
    id: 'OT-OP-01',
    procedureName: 'Off-Pump Coronary Artery Bypass Graft (CABG)',
    patientName: 'Ramesh Sundaram',
    patientAge: 61,
    primarySurgeon: 'Dr. Maya Lin, MD (Chief Cardio Surgeon)',
    otSuite: 'OT Suite 3 (Cardiac Biplane Cath Suite)',
    status: 'RUNNING',
    scheduledTime: '10:30 AM (In Progress)',
    durationMinutes: 240,
    elapsedMinutes: 110,
    assistingTeam: "Dr. Kevin O'Connor (Perfusionist), Scrub Nurse Jennifer Lopez",
    clinicalNotes: 'Triple vessel grafting active under continuous hemodynamic monitoring.'
  },
  {
    id: 'OT-OP-02',
    procedureName: 'Robotic Total Knee Arthroplasty (Stryker Mako)',
    patientName: 'Sunita Reddy',
    patientAge: 56,
    primarySurgeon: 'Dr. Sarah Jenkins, MD (Orthopedic Lead)',
    otSuite: 'OT Suite 1 (Orthopedic Robotics)',
    status: 'RUNNING',
    scheduledTime: '11:00 AM (In Progress)',
    durationMinutes: 120,
    elapsedMinutes: 50,
    assistingTeam: 'Anesthesia Team Alpha, Scrub Lead Clara Oswald',
    clinicalNotes: 'Femoral resection alignment 0.3 deg. Tibial tray positioning in progress.'
  },

  // Upcoming Today
  {
    id: 'OT-OP-03',
    procedureName: 'Micro-Discectomy & L4-L5 Spinal Decompression',
    patientName: 'Joseph Martinez',
    patientAge: 44,
    primarySurgeon: 'Dr. David Kim, MD, PhD (Neurosurgeon)',
    otSuite: 'OT Suite 2 (Neuro & Spine)',
    status: 'UPCOMING',
    scheduledTime: '02:00 PM Today',
    durationMinutes: 150,
    assistingTeam: 'Dr. James Ford (Anesthetist), Nurse Sarah Connor',
    clinicalNotes: 'Pre-op spinal MRI loaded into navigation console. Patient in pre-anesthesia holding.'
  },
  {
    id: 'OT-OP-04',
    procedureName: 'Laparoscopic Cholecystectomy (Gallbladder)',
    patientName: 'Fatima Al-Sayed',
    patientAge: 39,
    primarySurgeon: 'Dr. Anita Desai, MD (Surgical Gastro Lead)',
    otSuite: 'OT Suite 4 (General & Laparoscopy)',
    status: 'UPCOMING',
    scheduledTime: '03:45 PM Today',
    durationMinutes: 75,
    assistingTeam: 'Dr. Arthur Sterling, Scrub Nurse Rachel Adams',
    clinicalNotes: 'Elective keyhole surgery for symptomatic gallstones.'
  },

  // Completed Today
  {
    id: 'OT-OP-05',
    procedureName: 'Arthroscopic ACL Reconstruction & Meniscus Repair',
    patientName: 'Karen White',
    patientAge: 42,
    primarySurgeon: 'Dr. Sarah Jenkins, MD',
    otSuite: 'OT Suite 1 (Orthopedic Robotics)',
    status: 'COMPLETED',
    scheduledTime: '08:30 AM - 10:15 AM',
    durationMinutes: 105,
    assistingTeam: 'Anesthesia Team Bravo',
    clinicalNotes: 'Bio-absorbable screw fixation verified. Shifted safely to Post-Op Recovery Room 302.'
  },
  {
    id: 'OT-OP-06',
    procedureName: 'Emergency Burr Hole Evacuation (Subdural Hematoma)',
    patientName: 'Vikramaditya Rao',
    patientAge: 67,
    primarySurgeon: 'Dr. David Kim, MD',
    otSuite: 'OT Suite 2 (Trauma)',
    status: 'COMPLETED',
    scheduledTime: '07:00 AM - 08:30 AM',
    durationMinutes: 90,
    assistingTeam: 'Trauma ER Team 1',
    clinicalNotes: 'Intracranial pressure normalized. Extubated and transferred to ICU Pod 01.'
  }
];

// 3. Ambulance Fleet & Monthly Cost Breakdown
const DEFAULT_AMBULANCES: AmbulanceVehicle[] = [
  {
    id: 'AMB-01',
    vehicleNumber: 'AP-09-MED-1001',
    type: 'Advanced Cardiac ICU Life Support (ACLS)',
    status: 'Standby',
    driverName: 'Ramu Naidu (Emergency Certified)',
    paramedicLead: 'Paramedic Johnathan Vance, EMT-P',
    currentLocation: 'St. Jude Ground ER Bay 1',
    monthlyCostUSD: 2450,
    monthlyCostINR: 202000,
    fuelExpense: 650,
    staffSalary: 1400,
    maintenanceExpense: 400
  },
  {
    id: 'AMB-02',
    vehicleNumber: 'AP-09-MED-1002',
    type: 'Advanced Cardiac ICU Life Support (ACLS)',
    status: 'In Transit (Emergency)',
    driverName: 'K. Venkatesh',
    paramedicLead: 'Paramedic Sarah Miller, EMT-P',
    currentLocation: 'Highway Junction 4 (En-route with STEMI Patient)',
    monthlyCostUSD: 2550,
    monthlyCostINR: 210000,
    fuelExpense: 750,
    staffSalary: 1400,
    maintenanceExpense: 400
  },
  {
    id: 'AMB-03',
    vehicleNumber: 'AP-09-MED-1003',
    type: 'Basic Life Support (BLS)',
    status: 'Standby',
    driverName: 'Mohammad Rafiq',
    paramedicLead: 'Paramedic Priya Sharma, EMT-B',
    currentLocation: 'St. Jude Ground ER Bay 2',
    monthlyCostUSD: 1900,
    monthlyCostINR: 156000,
    fuelExpense: 500,
    staffSalary: 1100,
    maintenanceExpense: 300
  },
  {
    id: 'AMB-04',
    vehicleNumber: 'AP-09-MED-1004',
    type: 'Basic Life Support (BLS)',
    status: 'Standby',
    driverName: 'Suresh Kumar',
    paramedicLead: 'Paramedic David Ross, EMT-B',
    currentLocation: 'St. Jude Ground ER Bay 3',
    monthlyCostUSD: 1900,
    monthlyCostINR: 156000,
    fuelExpense: 500,
    staffSalary: 1100,
    maintenanceExpense: 300
  },
  {
    id: 'AMB-05',
    vehicleNumber: 'AP-09-MED-1005',
    type: 'Neonatal Emergency Transport',
    status: 'Under Maintenance',
    driverName: 'Shankar Goud',
    paramedicLead: 'NICU Specialist Nurse Clara',
    currentLocation: 'Authorized Mercedes-Benz Medical Workshop',
    monthlyCostUSD: 2700,
    monthlyCostINR: 221000,
    fuelExpense: 400,
    staffSalary: 1300,
    maintenanceExpense: 1000
  }
];

// 4. Blood Bank Matrix: Available Stock vs Depleted vs Urgent Demand
const DEFAULT_BLOOD_STOCK: BloodGroupStock[] = [
  { group: 'O+', unitsAvailable: 54, safeReserveTarget: 40, status: 'Optimal', urgentUnitsNeeded: 0 },
  { group: 'A+', unitsAvailable: 42, safeReserveTarget: 35, status: 'Optimal', urgentUnitsNeeded: 0 },
  { group: 'B+', unitsAvailable: 36, safeReserveTarget: 30, status: 'Optimal', urgentUnitsNeeded: 0 },
  { group: 'AB+', unitsAvailable: 18, safeReserveTarget: 15, status: 'Adequate', urgentUnitsNeeded: 0 },
  {
    group: 'O-',
    unitsAvailable: 2,
    safeReserveTarget: 25,
    status: 'Critical Shortage',
    urgentUnitsNeeded: 23,
    urgentReason: 'URGENT: Universal Donor required for Emergency Room trauma & multi-trauma resuscitation!'
  },
  {
    group: 'B-',
    unitsAvailable: 1,
    safeReserveTarget: 15,
    status: 'Critical Shortage',
    urgentUnitsNeeded: 14,
    urgentReason: 'URGENT: Needed for afternoon CABG Cardiac Bypass and Orthopedic Joint Surgeries.'
  },
  {
    group: 'AB-',
    unitsAvailable: 0,
    safeReserveTarget: 10,
    status: 'Depleted / Empty',
    urgentUnitsNeeded: 10,
    urgentReason: 'COMPLETELY OUT OF STOCK: Rare group donor camp / Red Cross blood dispatch requested immediately!'
  },
  {
    group: 'A-',
    unitsAvailable: 3,
    safeReserveTarget: 15,
    status: 'Critical Shortage',
    urgentUnitsNeeded: 12,
    urgentReason: 'LOW STOCK: 3 units remaining in cold cryogenic storage.'
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
  }
];

const DEFAULT_ATTENDANCE_LOGS: AttendanceDayRecord[] = [
  { date: 'Sep 01, 2026 (Today)', day: 'Monday', shift: 'Morning OT Shift (08:00 AM - 04:30 PM)', punchInTime: '07:52 AM', punchOutTime: 'Active On-Duty', status: 'Present', hoursWorked: 8.5, departmentFloor: 'Floor 3 (OT Complex Suite 1)' },
  { date: 'Aug 31, 2026', day: 'Sunday', shift: 'On-Call Emergency Trauma Shift (08:00 AM - 04:15 PM)', punchInTime: '08:00 AM', punchOutTime: '04:15 PM', status: 'Present', hoursWorked: 8.25, departmentFloor: 'Ground Floor ER & Trauma' },
  { date: 'Aug 30, 2026', day: 'Saturday', shift: 'Morning Clinical OPD & Ward Rounds (08:00 AM - 02:30 PM)', punchInTime: '08:10 AM', punchOutTime: '02:30 PM', status: 'Present', hoursWorked: 6.3, departmentFloor: 'Floor 3 (Wing C Ortho Ward)' }
];

const DEFAULT_EMPLOYEE_LEAVES: EmployeeLeaveRecord[] = [
  { id: 'LV-101', employeeName: 'Dr. Sarah Jenkins, MD', role: 'Senior Consultant Orthopedic Surgeon', department: 'Orthopedics', leaveType: 'Conference', startDate: 'Sep 10, 2026', endDate: 'Sep 12, 2026', reason: 'Attending Global Orthopedic Robotics & Joint Replacement Congress in Boston', substituteCover: "Dr. Kevin O'Connor (On-Call)", approvalStatus: 'Approved', managerNote: "Approved. Dr. Kevin O'Connor confirmed on-call substitute cover.", appliedDate: 'Aug 28, 2026' },
  { id: 'LV-102', employeeName: 'Dr. Marcus Reed, MD', role: 'Senior Pulmonologist', department: 'Pulmonology', leaveType: 'Conference', startDate: 'Today', endDate: 'Sep 04, 2026', reason: 'Attending International Respiratory & Chest Medicine Symposium in Chicago', substituteCover: 'Dr. Arthur Sterling (On-Call)', approvalStatus: 'Approved', managerNote: 'Approved. Emergency coverage verified.', appliedDate: 'Aug 25, 2026' },
  { id: 'LV-103', employeeName: 'Nurse Jennifer Lopez, BSN', role: 'Senior OT Scrub Nurse', department: 'Operation Theatres', leaveType: 'Casual', startDate: 'Today', endDate: 'Today Evening', reason: 'Family medical emergency', substituteCover: 'Nurse Clara Oswald, RN', approvalStatus: 'Approved', managerNote: 'Approved. Nurse Clara Oswald taking scrub lead.', appliedDate: 'Aug 31, 2026' },
  { id: 'LV-104', employeeName: 'Robert Langdon', role: 'Biomedical Senior Technician', department: 'Biomedical Engineering', leaveType: 'Emergency', startDate: 'Sep 02, 2026', endDate: 'Sep 05, 2026', reason: 'Urgent family relocation matter', substituteCover: 'Biomed. Nathan Drake', approvalStatus: 'Pending Review', appliedDate: 'Aug 30, 2026' }
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
  { id: 'WB-07', wardName: 'Emergency Casualty & Triage Beds', floor: 'Ground Floor ER', totalBeds: 25, occupiedBeds: 18, availableBeds: 7, headNurse: "Brian O'Connor, RN", ventilatorCount: 12 },
  { id: 'WB-08', wardName: 'Day Care Surgery & Chemotherapy', floor: 'Floor 4 (Center Wing)', totalBeds: 50, occupiedBeds: 43, availableBeds: 7, headNurse: 'Rachel Adams, RN', ventilatorCount: 2 }
];

const DEFAULT_SUPPLIES: SupplyItem[] = [
  { id: 'SUP-01', itemName: 'Liquid Medical Oxygen (Cryogenic Tank)', category: 'Gas & Power', currentStock: '96% Tank Capacity (12,000 Liters)', status: 'Optimal', reorderLevel: '40%' },
  { id: 'SUP-02', itemName: 'Sterile Surgical Glove Packs (Size 7.5 & 8.0)', category: 'Surgical & Consumables', currentStock: '1,450 Pairs', status: 'Optimal', reorderLevel: '300 Pairs' },
  { id: 'SUP-03', itemName: 'IV Normal Saline & Ringer Lactate (500ml)', category: 'Critical Medicine', currentStock: '820 Bottles', status: 'Optimal', reorderLevel: '200 Bottles' },
  { id: 'SUP-04', itemName: 'Emergency ICU Antibiotics (Meropenem 1g)', category: 'Critical Medicine', currentStock: '95 Vials', status: 'Reorder Soon', reorderLevel: '80 Vials' }
];

const STORAGE_KEY_APTS = 'medflow_hospital_appointments_v14';
const STORAGE_KEY_LEAVES = 'medflow_hospital_leaves_v4';

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

  approveLeave: async (id: string, managerNote?: string): Promise<void> => {
    const list = getLeaves();
    const updated = list.map(l => l.id === id ? {
      ...l,
      approvalStatus: 'Approved' as const,
      managerNote: managerNote || 'Approved by Hospital Manager.'
    } : l);
    saveLeaves(updated);
  },

  rejectLeave: async (id: string, managerNote: string): Promise<void> => {
    const list = getLeaves();
    const updated = list.map(l => l.id === id ? {
      ...l,
      approvalStatus: 'Rejected' as const,
      managerNote: managerNote || 'Rejected due to critical surgery / on-duty staffing constraints.'
    } : l);
    saveLeaves(updated);
  },

  getEquipmentList: async (): Promise<HospitalEquipment[]> => {
    return DEFAULT_EQUIPMENT;
  },

  getWardBeds: async (): Promise<WardBedAllocation[]> => {
    return DEFAULT_WARD_BEDS;
  },

  getRoomBeds: async (): Promise<RoomBedDetail[]> => {
    return DEFAULT_ROOM_BEDS;
  },

  getOTOperations: async (): Promise<OTLiveOperation[]> => {
    return DEFAULT_OT_OPERATIONS;
  },

  getAmbulances: async (): Promise<AmbulanceVehicle[]> => {
    return DEFAULT_AMBULANCES;
  },

  getBloodBankStock: async (): Promise<BloodGroupStock[]> => {
    return DEFAULT_BLOOD_STOCK;
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

    const runningOps = DEFAULT_OT_OPERATIONS.filter(o => o.status === 'RUNNING').length;
    const upcomingOps = DEFAULT_OT_OPERATIONS.filter(o => o.status === 'UPCOMING').length;
    const completedOps = DEFAULT_OT_OPERATIONS.filter(o => o.status === 'COMPLETED').length;

    const totalAmbUSD = DEFAULT_AMBULANCES.reduce((acc, a) => acc + a.monthlyCostUSD, 0);
    const totalAmbINR = DEFAULT_AMBULANCES.reduce((acc, a) => acc + a.monthlyCostINR, 0);

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
      activeAmbulancesReady: DEFAULT_AMBULANCES.filter(a => a.status === 'Standby').length,
      oxygenLevelPercent: 96,
      runningOperationsCount: runningOps,
      upcomingOperationsCount: upcomingOps,
      completedOperationsCount: completedOps,
      totalAmbulanceMonthlyCostUSD: totalAmbUSD,
      totalAmbulanceMonthlyCostINR: totalAmbINR
    };
  }
};
