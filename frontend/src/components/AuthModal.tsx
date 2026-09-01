import React from 'react';
import { useAuth, PRESET_HOSPITAL_USERS } from '../context/AuthContext';
import { UserPersona } from '../types';
import { X, ShieldAlert, Stethoscope, CalendarCheck, User, CheckCircle2 } from 'lucide-react';

export const AuthModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { switchUser, currentUser } = useAuth();
  if (!isOpen) return null;

  const handleSelectRole = (userId: string) => {
    switchUser(userId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl border border-slate-200">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-base text-slate-900">Hospital Staff & Patient Authentication</h3>
            <p className="text-[11px] text-slate-500">Select a verified clinical persona to experience role-specific access</p>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {PRESET_HOSPITAL_USERS.map(user => {
            const isSelected = currentUser?.id === user.id;
            return (
              <div
                key={user.id}
                onClick={() => handleSelectRole(user.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all space-y-2 ${
                  isSelected
                    ? 'bg-slate-50 border-slate-900 ring-2 ring-slate-900/10 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-400 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {user.persona === 'HOSPITAL_HEAD' ? (
                      <div className="p-1.5 bg-amber-100 text-amber-900 rounded-lg">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                    ) : user.persona === 'DOCTOR_PHYSICIAN' ? (
                      <div className="p-1.5 bg-blue-100 text-blue-900 rounded-lg">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                    ) : user.persona === 'APPOINTMENT_DESK' ? (
                      <div className="p-1.5 bg-teal-100 text-teal-900 rounded-lg">
                        <CalendarCheck className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="p-1.5 bg-purple-100 text-purple-900 rounded-lg">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <span className="font-bold text-slate-900">{user.name.split(',')[0]}</span>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>

                <div>
                  <span className="text-[10px] font-bold block text-slate-700">{user.role}</span>
                  <span className="text-[10px] text-slate-400 font-mono block mt-0.5">{user.email}</span>
                </div>

                <div className="pt-1.5 border-t border-slate-100 flex justify-between items-center text-[10px]">
                  <span className="text-slate-500">{user.department}</span>
                  <span className="font-bold text-slate-800 underline">Switch ➔</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 text-center text-slate-400 text-[11px]">
          St. Jude Medical Center • HIPAA Security & Role-Based Access Control Active
        </div>
      </div>
    </div>
  );
};
