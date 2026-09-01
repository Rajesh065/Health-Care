import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PatientAppointment, LabDiagnosticReport, PrescriptionOrder, HospitalBillingInvoice } from '../types';
import { useAuth } from '../context/AuthContext';
import {
  Calendar,
  Plus,
  FileText,
  Pill,
  CreditCard,
  CheckCircle2,
  Clock,
  Download,
  Stethoscope,
  HeartPulse
} from 'lucide-react';

export const PatientPortalPage: React.FC<{ onBookAppointment: () => void }> = ({ onBookAppointment }) => {
  const { currentUser } = useAuth();
  const [appointments, setAppointments] = useState<PatientAppointment[]>([]);
  const [labReports, setLabReports] = useState<LabDiagnosticReport[]>([]);
  const [prescriptions, setPrescriptions] = useState<PrescriptionOrder[]>([]);
  const [invoices, setInvoices] = useState<HospitalBillingInvoice[]>([]);

  useEffect(() => {
    api.getAppointments().then(data => {
      setAppointments(data.filter(a => a.patientName.includes('Robert') || a.patientId === 'PT-90482'));
    });
    api.getLabReports().then(setLabReports);
    api.getPrescriptions().then(setPrescriptions);
    api.getInvoices().then(setInvoices);
  }, []);

  return (
    <div className="space-y-6 py-2 w-full">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-purple-800 text-white flex items-center justify-center font-extrabold text-base shadow-xs">
            RC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900">Robert Chen — Patient Health Portal</h1>
              <span className="text-[10px] font-bold bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded font-mono">
                PATIENT ID: PT-90482
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              St. Jude Medical Center • Primary Cardiologist: <strong>Dr. Maya Lin, MD, FACC</strong>
            </p>
          </div>
        </div>

        <button
          onClick={onBookAppointment}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Book Specialist Appointment</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-700" />
                <h3 className="font-bold text-sm text-slate-900">My Booked Appointments ({appointments.length})</h3>
              </div>
              <button onClick={onBookAppointment} className="text-xs font-bold text-purple-700 hover:underline">
                + Book New Slot
              </button>
            </div>

            <div className="space-y-3">
              {appointments.map(app => (
                <div key={app.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono font-bold text-[10px] text-purple-900 bg-purple-100 px-2 py-0.5 rounded">
                        TOKEN {app.tokenNumber} • {app.roomNumber}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 mt-1">{app.doctorName}</h4>
                      <p className="text-[11px] text-slate-500">{app.department} ({app.doctorSpecialty})</p>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      ✓ {app.status}
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-slate-200/80 text-[11px] text-slate-700">
                    <strong>Chief Complaint:</strong> {app.symptoms}
                  </div>

                  <div className="pt-2 border-t border-slate-200/50 flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>DATE: {app.appointmentDate}</span>
                    <span className="text-purple-900 font-bold">{app.slotTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Pill className="w-4 h-4 text-blue-700" />
              <h3 className="font-bold text-sm text-slate-900">My Active Prescriptions & Dosages</h3>
            </div>

            <div className="space-y-2.5 text-xs">
              {prescriptions.map(rx => (
                <div key={rx.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{rx.medicationName}</span>
                      <span className="font-mono text-[10px] font-bold bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded">
                        {rx.dosage}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">{rx.frequency} • {rx.timing}</p>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Prescribed by {rx.doctorName}</span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {rx.refillsLeft} Refills Left
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileText className="w-4 h-4 text-emerald-700" />
              <h3 className="font-bold text-sm text-slate-900">My Diagnostic Lab Reports</h3>
            </div>

            <div className="space-y-2.5 text-xs">
              {labReports.map(rep => (
                <div key={rep.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-900">{rep.reportName}</h4>
                    <button
                      onClick={() => alert(`Downloading verified lab report: ${rep.reportName}`)}
                      className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{rep.resultSummary}</p>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-200/50">
                    <span>{rep.category}</span>
                    <span className="text-emerald-700 font-bold">{rep.testDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <CreditCard className="w-4 h-4 text-amber-700" />
              <h3 className="font-bold text-sm text-slate-900">Hospital Billing & Insurance Co-Pay</h3>
            </div>

            <div className="space-y-2.5 text-xs">
              {invoices.map(inv => (
                <div key={inv.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">{inv.invoiceNumber}</span>
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded">
                      ✓ {inv.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600 text-[10px]">
                    <span>TOTAL: ${inv.totalAmountUsd.toFixed(2)}</span>
                    <span>INSURANCE: ${inv.insuranceCoveredUsd.toFixed(2)}</span>
                    <span className="font-bold text-slate-900">CO-PAY: ${inv.patientCoPayUsd.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
