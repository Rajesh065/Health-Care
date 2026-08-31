# 🏥 MedFlow Health - Enterprise Healthcare Management and Telehealth Platform

[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-Passing-brightgreen)](.github/workflows/ci.yml)
[![Security Scan](https://img.shields.io/badge/Security-HIPAA%20Verified-blue)](.github/workflows/security-scan.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node%20%7C%20TypeScript%20%7C%20Tailwind-blueviolet)](#technology-stack)

**MedFlow Health** is an enterprise-grade, full-stack Healthcare ERP, Electronic Health Record (EHR/EMR), Telehealth Consultation, Pharmacy, Laboratory, and Clinical Decision Support System.

Designed for modern hospitals, outpatient clinics, telemedicine networks, and multi-specialty healthcare systems.

---

## 🌟 Key Architecture and Features

### 1. 🧑‍⚕️ Clinical Workspace and EHR (Electronic Health Record)
- **Comprehensive Patient Charts**: Demographics, historical vitals trend visualization, allergies, chronic conditions, family history.
- **SOAP Notes Engine**: Structured Subjective, Objective, Assessment, and Plan clinical note creation with digital physician signature.
- **Clinical Decision Support (CDS)**: Built-in drug-drug interaction checker, allergy warning triggers, and ICD-10 diagnostic search.
- **Digital E-Prescriptions**: Generation, dosage calculator, and automated pharmacy routing.

### 2. 📹 Telehealth and Virtual Consultation Suite
- **Interactive Telehealth Room**: High-definition video simulator with camera/microphone switching, screen sharing, and audio diagnostics.
- **Integrated In-Call Workspace**: Live chat, real-time clinical notes drawer, instant prescription issuer during calls.
- **Call Session Recording and HIPAA-Compliant Metadata Logging**.

### 3. 📅 Appointment Scheduling and Queue Management
- **Multi-View Calendar**: Filter by department, doctor, visit type (In-Person vs Telehealth), and date.
- **Smart Patient Queue**: Real-time triage status transitions (Scheduled -> Checked-In -> In-Consultation -> Completed -> Follow-Up).
- **Emergency Triage**: Color-coded urgency levels (Red, Orange, Yellow, Green).

### 4. 💊 Pharmacy and Inventory Management
- **Prescription Queue and Dispensing Station**: Batch validation, allergy checks, automated stock deduction.
- **Inventory Tracking**: Stock level monitoring, expiration alerts, reorder threshold triggers.

### 5. 🔬 Laboratory and Diagnostics Center
- **Diagnostic Order Lifecycle**: Blood panels, Pathology, Radiology (X-Ray/CT/MRI) tracking.
- **Digital Result Viewer**: Reference range flags (Normal, Low, High, Critical) and PDF-ready reports.

### 6. 💳 Billing, Invoicing and Insurance Claims
- **Itemized Billing**: CPT and ICD-10 line items, copay calculation, tax breakdown.
- **Insurance Adjudication Simulator**: Real-time pre-authorization, copay deductibles, claims status tracker.

### 7. 🏥 Hospital Administration and Bed Management
- **Ward and Bed Occupancy**: Live tracking of ICU, Emergency, Surgical, and General ward beds.
- **Staff Roster and Shift Scheduling**: Shift rotation for Doctors, Nurses, and Lab Techs.

### 8. 🤖 AI Clinical Triage and Symptom Checker
- **Intelligent Symptom Triage**: Guided questionnaire assessing chief complaints, duration, severity, and red-flag symptoms.
- **Risk Stratification**: AI-driven triage score with immediate doctor referral recommendations.

### 9. 🔒 Security and HIPAA Compliance
- **Role-Based Access Control (RBAC)**: Enforced roles (ADMIN, DOCTOR, NURSE, PATIENT, PHARMACIST, LAB_TECH).
- **Immutable HIPAA Audit Trail**: Logs every view, edit, prescription, and billing transaction with IP and timestamp.
- **JWT Authentication and Argon2/Bcrypt Password Hashing**.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite, TailwindCSS, Lucide React, Recharts, React Router DOM |
| **Backend** | Node.js, Express.js, TypeScript, SQLite / In-Memory Mock Store, Zod Validation, Winston Logger |
| **Security** | JWT, Helmet, Rate Limiter, RBAC Middleware, HIPAA Audit Trail Engine |
| **Testing** | Vitest / Jest, Supertest, React Testing Library |
| **DevOps** | Docker, Docker Compose, GitHub Actions CI/CD |

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: `>= 20.0.0`
- **npm**: `>= 10.0.0` (or Docker)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/medflow-health.git
cd medflow-health

# 2. Install dependencies for all workspaces
npm run install:all
```

### Running the Application

```bash
# Start both Backend API and Frontend simultaneously
npm run dev

# Or run them individually:
# Backend (http://localhost:5000)
npm run dev:backend

# Frontend (http://localhost:3000)
npm run dev:frontend
```

### Running with Docker

```bash
docker-compose up --build
```

---

## 🧪 Testing and Code Quality

```bash
# Run all unit and integration tests
npm test

# Run linter
npm run lint

# Build production bundles
npm run build
```

---

## 📁 Repository Structure

```text
medflow-health/
├── .github/
│   ├── workflows/           # CI/CD pipelines (ci.yml, security-scan.yml, pr-checks.yml)
│   └── pull_request_template.md
├── backend/
│   ├── src/
│   │   ├── config/          # App config, database connection, winston logger
│   │   ├── controllers/     # Modular route handlers (Auth, EHR, Telehealth, Pharmacy, etc.)
│   │   ├── middleware/      # Auth JWT, RBAC, HIPAA audit logger, error handling
│   │   ├── models/          # TypeScript domain models and database schemas
│   │   ├── routes/          # Express REST API route definitions
│   │   ├── services/        # Business logic layer
│   │   ├── utils/           # ICD-10 data, drug interactions, CPT codes
│   │   └── tests/           # Unit and integration test suites
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/      # Modular UI components (Dashboard, EHR, Telehealth, Lab, etc.)
│   │   ├── context/         # Auth, Notification, and Theme state providers
│   │   ├── pages/           # High-level route views
│   │   ├── services/        # Axios / Fetch API clients
│   │   ├── types/           # Shared TypeScript interfaces
│   │   ├── App.tsx          # Root application routing
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
