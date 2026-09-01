# 🏥 MedFlow OS - Enterprise Healthcare, EHR & Telehealth Platform

[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-Passing-brightgreen)](.github/workflows/ci.yml)
[![Security Scan](https://img.shields.io/badge/Security-Verified-blue)](.github/workflows/security-scan.yml)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

**MedFlow OS** is an enterprise-grade Electronic Health Records (EHR), Telehealth, Patient Portal, and Clinical Management platform built with strict adherence to HIPAA, FHIR R4 interoperability, and HL7 clinical protocols.

---

## 🌟 Key Architecture & Features

1. **📋 Electronic Health Records (EHR)**: Full patient charts, vitals tracking, diagnosis records, and lab results.
2. **🩺 Telehealth WebRTC Engine**: Encrypted HD video appointments with live clinical charting and prescription dispatch.
3. **💊 Medical Ontologies & Prescriptions**: 1,800+ ICD-10 diagnostic codes, SNOMED-CT clinical observations, and RxNorm drug dictionaries.
4. **📅 Intelligent Appointment Scheduling**: Multi-doctor calendaring, automated SMS/email reminders, and queue management.
5. **💳 Insurance & Billing Hub**: EDI 837 claim generation, co-pay processing, ICD-10 automated charge capture.
6. **🔒 HIPAA Compliance & Audit Trail**: Cryptographic SHA-256 access logs for all patient health information (PHI).

---

## 📦 Installation Instructions

```bash
# 1. Install all monorepo dependencies
npm install
```

---

## 🛠️ Build Instructions

```bash
# Build backend and frontend production assets
npm run build
```

---

## 🚀 Run Instructions

```bash
# Start backend API (http://localhost:5000)
npm run dev:backend

# Start frontend UI (http://localhost:3000)
npm run dev:frontend

# Run automated tests
npm test
```
