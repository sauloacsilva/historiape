import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { DIMENSIONS } from '../data/dimensionsData';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Sparkles, Trophy } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optIdx);
    setIsAnswered(true);

    if (optIdx === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-fade-in">
      {!isFinished ? (
        <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E2DBD0] shadow-sm space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#EFEADF]">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#E2ECE0] text-[#2D5A27] flex items-center justify-center font-black">
                <Award className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#2C3531]">
                  Desafio de História de Pernambuco
                </h2>
                <p className="text-xs text-[#6B7280]">
                  Pergunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
                </p>
              </div>
            </div>

            {/* Dimension Tag */}
            {currentQ.dimension && (
              <span
                style={{
                  backgroundColor: DIMENSIONS[currentQ.dimension].pastelBg,
                  color: DIMENSIONS[currentQ.dimension].pastelText,
                }}
                className="px-3 py-1 rounded-full text-xs font-bold"
              >
                {DIMENSIONS[currentQ.dimension].label}
              </span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E2DBD0] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#2D5A27] h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h3 className="text-xl font-bold text-[#2C3531] leading-snug">
            {currentQ.question}
          </h3>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              let optionStyle = 'bg-[#F3EFE6] border-[#E2DBD0] text-[#2C3531] hover:bg-[#E2DBD0]';

              if (isAnswered) {
                if (optIdx === currentQ.correctIndex) {
                  optionStyle = 'bg-[#D1FAE5] border-[#10B981] text-[#065F46] font-bold';
                } else if (selectedOption === optIdx) {
                  optionStyle = 'bg-[#FEE2E2] border-[#EF4444] text-[#991B1B] font-bold';
                } else {
                  optionStyle = 'bg-[#F3EFE6] border-[#E2DBD0] text-[#9CA3AF] opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-2xl border-2 text-left text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && optIdx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                  )}
                  {isAnswered && selectedOption === optIdx && optIdx !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-[#EF4444] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-[#FEF3C7] border border-[#FCD34D] text-xs text-[#92400E] space-y-1 animate-fade-in">
              <span className="font-bold uppercase tracking-wider block">💡 Explicação Pedagógica:</span>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D5A27] hover:bg-[#23471E] text-white text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                <span>{currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Próxima Questão' : 'Ver Resultado Final'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Finished Screen */
        <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E2DBD0] shadow-sm text-center space-y-6 animate-scale-up">
          <div className="w-20 h-20 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mx-auto shadow-inner border-2 border-[#FCD34D]">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <span className="px-3 py-1 rounded-full bg-[#E2ECE0] text-[#2D5A27] text-xs font-bold uppercase tracking-wider">
              Parabéns, Estudante!
            </span>
            <h2 className="text-3xl font-black text-[#2C3531] mt-2">
              Certificado de Historiador Mirim
            </h2>
            <p className="text-sm text-[#5C5549] mt-1">
              Você acertou <strong className="text-[#8B5E3C] text-lg">{score}</strong> de <strong>{QUIZ_QUESTIONS.length}</strong> questões do atlas!
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F3EFE6] border border-[#E2DBD0] max-w-md mx-auto text-xs text-[#2C3531]">
            <p className="font-semibold italic">
              "Pernambuco é uma terra de lutas, liberdade, encontros étnicos e efervescência cultural constante. Continue explorando nosso atlas!"
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B5E3C] text-white text-xs font-bold hover:bg-[#6D482F] transition-all cursor-pointer mx-auto shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refazer o Desafio</span>
          </button>
        </div>
      )}
    </div>
  );
};
