import React from 'react';
import { TIMELINE_EVENTS } from '../data/timelineEventsData';
import { DIMENSIONS } from '../data/dimensionsData';
import { X, Printer, Download, BookOpen, CheckCircle2 } from 'lucide-react';

interface StudyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyGuideModal: React.FC<StudyGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-[#FDFBF7] max-w-4xl w-full max-h-[90vh] rounded-3xl border border-[#E2DBD0] shadow-2xl flex flex-col overflow-hidden animate-scale-up">
        {/* Header Bar */}
        <div className="p-4 bg-[#F3EFE6] border-b border-[#E2DBD0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#8B5E3C]" />
            <h2 className="text-sm font-bold text-[#2C3531]">
              Ficha de Estudo e Resumo Didático | História de Pernambuco
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#8B5E3C] text-white text-xs font-bold hover:bg-[#6D482F] transition-all cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#E2DBD0] text-[#2C3531] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Content Body */}
        <div className="p-8 overflow-y-auto space-y-6 text-[#2C3531] print:p-0">
          {/* Printable Title Block */}
          <div className="border-b border-[#E2DBD0] pb-4">
            <span className="text-xs font-bold text-[#8B5E3C] uppercase tracking-wider block mb-1">
              Secretaria de Educação - Governo do Estado de Pernambuco • Anos Finais
            </span>
            <h1 className="text-2xl font-black text-[#2C3531]">
              Guia Sintético da História de Pernambuco
            </h1>
            <p className="text-xs text-[#5C5549] mt-1">
              Material de apoio pedagógico cobrindo as 6 dimensões (Econômica, Social, Étnica, Política, Cultural e Logística).
            </p>
          </div>

          {/* Dimensions Overview */}
          <div>
            <h2 className="text-sm font-bold text-[#2C3531] mb-2 uppercase tracking-wider">
              1. As 6 Dimensões Analíticas de Pernambuco:
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {Object.values(DIMENSIONS).map((dim) => (
                <div key={dim.id} style={{ backgroundColor: dim.pastelBg }} className="p-2.5 rounded-xl border border-black/5">
                  <span className="font-bold block mb-0.5" style={{ color: dim.pastelText }}>
                    {dim.label}
                  </span>
                  <p className="text-[11px] text-[#2C3531]">{dim.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Table */}
          <div>
            <h2 className="text-sm font-bold text-[#2C3531] mb-2 uppercase tracking-wider">
              2. Cronologia Básica dos 30 Eventos (1500 - 1848):
            </h2>
            <div className="border border-[#E2DBD0] rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F3EFE6] border-b border-[#E2DBD0] text-[11px] font-bold text-[#5C5549]">
                    <th className="p-2">Ano</th>
                    <th className="p-2">Acontecimento Histórico</th>
                    <th className="p-2">Dimensão</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DBD0]">
                  {TIMELINE_EVENTS.map((evt) => (
                    <tr key={evt.id} className="hover:bg-[#FAF6EE]">
                      <td className="p-2 font-black text-[#8B5E3C]">{evt.year}</td>
                      <td className="p-2">{evt.title}</td>
                      <td className="p-2 text-[10px] text-[#6B7280]">
                        {evt.dimensions.map(d => DIMENSIONS[d].label).join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
