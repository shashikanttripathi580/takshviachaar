import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ToastMessage, ToastType } from '../types';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastContextType {
  showToast: (title: string, message?: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((title: string, message?: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 3800);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Render Overlay */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3 max-w-sm w-full px-4 sm:px-0 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-xl border backdrop-blur-md transform transition-all duration-300 animate-fade-in ${
              toast.type === 'success'
                ? 'bg-[#FDFBF7] border-[#2D6A4F] text-[#1B4332]'
                : toast.type === 'error'
                ? 'bg-[#FFF5F5] border-[#942817] text-[#8B1E1E]'
                : toast.type === 'warning'
                ? 'bg-[#FFFBEB] border-[#D97706] text-[#B45309]'
                : 'bg-[#F8FAFC] border-stone-300 text-stone-800'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#2D6A4F]" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-[#8B1E1E]" />}
              {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-[#D97706]" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-stone-600]" />}
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="font-semibold text-sm">{toast.title}</h5>
              {toast.message && <p className="text-xs mt-0.5 text-stone-600">{toast.message}</p>}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="shrink-0 text-stone-400 hover:text-stone-700 transition-colors p-1"
              aria-label="Dismiss toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
