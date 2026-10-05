import React, { useState, useEffect, useRef } from 'react';
import { Clock, RotateCcw, Send, CheckCircle2, Trophy, BookOpen, AlertCircle, Sparkles, HelpCircle } from 'lucide-react';
import { Language, UserProgress, CrosswordClue } from '../types';
import { translations } from '../data/translations';
import { LATIN_CROSSWORD_CLUES, CROSSWORD_GRID_DIMENSIONS } from '../data/crosswordData';

interface CrosswordGameProps {
  userProgress: UserProgress;
  onSaveQuizResult: (score: number, timeSeconds: number) => void;
  onReviewMaterials: () => void;
  currentLang: Language;
  isRTL: boolean;
}

interface CellCoordinate {
  row: number;
  col: number;
}

export const CrosswordGame: React.FC<CrosswordGameProps> = ({
  userProgress,
  onSaveQuizResult,
  onReviewMaterials,
  currentLang,
  isRTL,
}) => {
  const t = translations[currentLang];
  const clues = LATIN_CROSSWORD_CLUES[currentLang];
  const { rows, cols } = CROSSWORD_GRID_DIMENSIONS;

  // Build grid of valid letters from clues
  const solutionGrid = useRef<(string | null)[][]>(
    Array(rows).fill(null).map(() => Array(cols).fill(null))
  ).current;

  // Clue numbers placement
  const clueNumberGrid = useRef<(number | null)[][]>(
    Array(rows).fill(null).map(() => Array(cols).fill(null))
  ).current;

  // Initialize solutions and clue numbers once
  useEffect(() => {
    clues.forEach((c) => {
      clueNumberGrid[c.row][c.col] = c.number;
      for (let i = 0; i < c.answer.length; i++) {
        const r = c.direction === 'across' ? c.row : c.row + i;
        const col = c.direction === 'across' ? c.col + i : c.col;
        solutionGrid[r][col] = c.answer[i];
      }
    });
  }, [clues, rows, cols]);

  // Player grid state
  const [userGrid, setUserGrid] = useState<string[][]>(() =>
    Array(rows).fill('').map(() => Array(cols).fill(''))
  );

  // Selected cell & direction
  const [selectedCell, setSelectedCell] = useState<CellCoordinate>({ row: 1, col: 1 });
  const [direction, setDirection] = useState<'across' | 'down'>('across');
  const [selectedClueNumber, setSelectedClueNumber] = useState<number>(1);

  // Timer
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Check answers mode
  const [checkedCells, setCheckedCells] = useState<boolean[][]>(
    Array(rows).fill(false).map(() => Array(cols).fill(false))
  );

  // Result state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(clues.length);

  // Timer interval
  useEffect(() => {
    if (!isTimerRunning || isSubmitted) return;
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, isSubmitted]);

  // Format time (MM:SS)
  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Find active clue based on selected cell and direction
  useEffect(() => {
    const matchingClues = clues.filter((c) => {
      if (c.direction !== direction) return false;
      if (c.direction === 'across') {
        return c.row === selectedCell.row &&
          selectedCell.col >= c.col &&
          selectedCell.col < c.col + c.answer.length;
      } else {
        return c.col === selectedCell.col &&
          selectedCell.row >= c.row &&
          selectedCell.row < c.row + c.answer.length;
      }
    });

    if (matchingClues.length > 0) {
      setSelectedClueNumber(matchingClues[0].number);
    }
  }, [selectedCell, direction, clues]);

  // Get active word cells for highlighting
  const getActiveWordCells = (): CellCoordinate[] => {
    const activeClue = clues.find((c) => c.number === selectedClueNumber && c.direction === direction)
      || clues.find((c) => c.number === selectedClueNumber);

    if (!activeClue) return [];

    const cells: CellCoordinate[] = [];
    for (let i = 0; i < activeClue.answer.length; i++) {
      const r = activeClue.direction === 'across' ? activeClue.row : activeClue.row + i;
      const col = activeClue.direction === 'across' ? activeClue.col + i : activeClue.col;
      cells.push({ row: r, col });
    }
    return cells;
  };

  const activeWordCells = getActiveWordCells();

  // Cell click handler
  const handleCellClick = (r: number, c: number) => {
    if (!solutionGrid[r][c]) return;

    if (selectedCell.row === r && selectedCell.col === c) {
      // Toggle direction if cell supports both
      setDirection((prev) => (prev === 'across' ? 'down' : 'across'));
    } else {
      setSelectedCell({ row: r, col: c });
    }
  };

  // Select clue from sidebar
  const handleSelectClue = (clue: CrosswordClue) => {
    setSelectedClueNumber(clue.number);
    setDirection(clue.direction);
    setSelectedCell({ row: clue.row, col: clue.col });
  };

  // Key press handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isSubmitted) return;

    const { row, col } = selectedCell;

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (row > 0 && solutionGrid[row - 1][col]) {
        setSelectedCell({ row: row - 1, col });
        setDirection('down');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (row < rows - 1 && solutionGrid[row + 1][col]) {
        setSelectedCell({ row: row + 1, col });
        setDirection('down');
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (col > 0 && solutionGrid[row][col - 1]) {
        setSelectedCell({ row, col: col - 1 });
        setDirection('across');
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (col < cols - 1 && solutionGrid[row][col + 1]) {
        setSelectedCell({ row, col: col + 1 });
        setDirection('across');
      }
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      const updated = userGrid.map((rArr) => [...rArr]);
      if (updated[row][col] !== '') {
        updated[row][col] = '';
        setUserGrid(updated);
      } else {
        // Move back to previous cell in current direction
        const prevRow = direction === 'down' ? Math.max(0, row - 1) : row;
        const prevCol = direction === 'across' ? Math.max(0, col - 1) : col;
        if (solutionGrid[prevRow][prevCol]) {
          updated[prevRow][prevCol] = '';
          setUserGrid(updated);
          setSelectedCell({ row: prevRow, col: prevCol });
        }
      }
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
      const letter = e.key.toUpperCase();
      const updated = userGrid.map((rArr) => [...rArr]);
      updated[row][col] = letter;
      setUserGrid(updated);

      // Auto-advance to next cell in current word
      const nextRow = direction === 'down' ? row + 1 : row;
      const nextCol = direction === 'across' ? col + 1 : col;

      if (
        nextRow < rows &&
        nextCol < cols &&
        solutionGrid[nextRow][nextCol]
      ) {
        setSelectedCell({ row: nextRow, col: nextCol });
      }
    }
  };

  // Check current answers
  const handleCheckAnswers = () => {
    const verified = Array(rows).fill(false).map(() => Array(cols).fill(false));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (solutionGrid[r][c] && userGrid[r][c] === solutionGrid[r][c]) {
          verified[r][c] = true;
        }
      }
    }
    setCheckedCells(verified);
  };

  // Reset grid
  const handleReset = () => {
    setUserGrid(Array(rows).fill('').map(() => Array(cols).fill('')));
    setCheckedCells(Array(rows).fill(false).map(() => Array(cols).fill(false)));
  };

  // Submit crossword
  const handleSubmit = () => {
    setIsTimerRunning(false);

    // Compute which clues are completely correct
    let correct = 0;
    clues.forEach((clue) => {
      let wordCorrect = true;
      for (let i = 0; i < clue.answer.length; i++) {
        const r = clue.direction === 'across' ? clue.row : clue.row + i;
        const c = clue.direction === 'across' ? clue.col + i : clue.col;
        if (userGrid[r][c] !== clue.answer[i]) {
          wordCorrect = false;
          break;
        }
      }
      if (wordCorrect) correct++;
    });

    const calculatedScore = Math.round((correct / clues.length) * 100);
    setCorrectCount(correct);
    setQuizScore(calculatedScore);
    setIsSubmitted(true);

    onSaveQuizResult(calculatedScore, secondsElapsed);
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 focus:outline-none"
    >
      {/* Quiz Header & Live Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-1">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span>{t.quiz.title}</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-emerald-950">
            {({ id: 'Evaluasi Hubungan Indonesia–Turki', en: 'Indonesia–Türkiye Relations Quiz', ar: 'اختبار العلاقات الإندونيسية التركية', tr: 'Endonezya–Türkiye İlişkileri Testi' } as const)[currentLang]}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            {t.quiz.subtitle}
          </p>
        </div>

        {/* Live Status: Timer, Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 shadow-2xs font-mono text-sm font-semibold text-stone-800">
            <Clock className="h-4 w-4 text-emerald-800" />
            <span>{formatTime(secondsElapsed)}</span>
          </div>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl border border-stone-200 bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors cursor-pointer"
            title={t.quiz.btnReset}
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Rules Banner */}
      <div className="p-3.5 rounded-xl bg-emerald-950/5 border border-emerald-900/10 text-xs text-stone-700 mb-6 flex items-start gap-2.5">
        <HelpCircle className="h-4 w-4 text-emerald-800 shrink-0 mt-0.5" />
        <span>{t.quiz.rulesNote}</span>
      </div>

      {/* Main Grid & Clues Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Top: Interactive Crossword Grid */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-lg bg-stone-900 p-4 sm:p-6 rounded-3xl shadow-lg border border-stone-300">
            {/* The Grid */}
            <div
              className="grid gap-1 sm:gap-1.5 mx-auto select-none"
              style={{
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: rows }).map((_, r) =>
                Array.from({ length: cols }).map((__, c) => {
                  const isValidCell = solutionGrid[r][c] !== null;
                  const clueNum = clueNumberGrid[r][c];
                  const userVal = userGrid[r][c];
                  const isSelected = selectedCell.row === r && selectedCell.col === c;
                  const isInActiveWord = activeWordCells.some(
                    (cell) => cell.row === r && cell.col === c
                  );
                  const isCheckedCorrect = checkedCells[r][c];

                  if (!isValidCell) {
                    return (
                      <div
                        key={`${r}-${c}`}
                        className="aspect-square bg-stone-950/90 rounded-sm opacity-90"
                      />
                    );
                  }

                  return (
                    <div
                      key={`${r}-${c}`}
                      onClick={() => handleCellClick(r, c)}
                      className={`relative aspect-square flex items-center justify-center rounded cursor-pointer transition-all duration-100 font-bold text-sm sm:text-base ${
                        isSelected
                          ? 'bg-amber-300 text-stone-950 ring-2 ring-amber-500 z-10 shadow-sm'
                          : isInActiveWord
                          ? 'bg-emerald-100 text-emerald-950'
                          : isCheckedCorrect
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-400'
                          : 'bg-white text-stone-900 hover:bg-stone-100'
                      }`}
                    >
                      {/* Clue Number Indicator */}
                      {clueNum && (
                        <span className="absolute top-0.5 left-1 text-[9px] sm:text-[10px] font-mono font-medium text-stone-500 pointer-events-none leading-none">
                          {clueNum}
                        </span>
                      )}

                      {/* User input character */}
                      <span className="mt-1 sm:mt-1.5 font-mono">{userVal}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Action Buttons beneath grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 w-full max-w-lg">
            <button
              onClick={handleCheckAnswers}
              className="flex-1 py-2.5 px-4 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-xs font-semibold text-stone-800 transition-colors cursor-pointer shadow-2xs text-center"
            >
              {t.quiz.btnCheckAnswers}
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 text-xs font-semibold transition-all cursor-pointer shadow-sm text-center flex items-center justify-center gap-1.5"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{t.quiz.btnSubmit}</span>
            </button>
          </div>
        </div>

        {/* Right/Bottom: Clues List (Across & Down) */}
        <div className="lg:col-span-5 space-y-6 max-h-[640px] overflow-y-auto pr-2 scrollbar-thin">
          {/* Across Clues */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
            <h2 className="font-serif-title text-lg font-bold text-emerald-950 mb-3 pb-2 border-b border-stone-100 flex items-center justify-between">
              <span>{t.quiz.acrossHeading}</span>
              <span className="text-xs font-sans text-stone-400 font-normal">
                {clues.filter((c) => c.direction === 'across').length} {({ id: 'Pertanyaan', en: 'Clues', ar: 'أسئلة', tr: 'Sorular' } as const)[currentLang]}
              </span>
            </h2>

            <div className="space-y-3">
              {clues
                .filter((c) => c.direction === 'across')
                .map((clue) => {
                  const isActive =
                    selectedClueNumber === clue.number && direction === 'across';
                  return (
                    <div
                      key={clue.number}
                      onClick={() => handleSelectClue(clue)}
                      className={`p-3 rounded-xl cursor-pointer transition-all text-xs leading-relaxed ${
                        isActive
                          ? 'bg-emerald-950 text-white shadow-xs font-medium'
                          : 'bg-[#FBF9F5] text-stone-700 hover:bg-stone-100 border border-stone-100'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`h-5 w-5 rounded-full flex items-center justify-center font-mono font-bold text-[11px] ${
                          isActive ? 'bg-amber-300 text-emerald-950' : 'bg-stone-200 text-stone-700'
                        }`}>
                          {clue.number}
                        </span>
                        <span className={`text-[10px] uppercase font-semibold tracking-wider ${
                          isActive ? 'text-amber-200' : 'text-stone-400'
                        }`}>
                          {t.quiz.categoryLabels[clue.category]} · {clue.answer.length} {({ id: 'Huruf', en: 'Letters', ar: 'أحرف', tr: 'Harf' } as const)[currentLang]}
                        </span>
                      </div>
                      <p>{clue.clue}</p>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Down Clues */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
            <h2 className="font-serif-title text-lg font-bold text-emerald-950 mb-3 pb-2 border-b border-stone-100 flex items-center justify-between">
              <span>{t.quiz.downHeading}</span>
              <span className="text-xs font-sans text-stone-400 font-normal">
                {clues.filter((c) => c.direction === 'down').length} {({ id: 'Pertanyaan', en: 'Clues', ar: 'أسئلة', tr: 'Sorular' } as const)[currentLang]}
              </span>
            </h2>

            <div className="space-y-3">
              {clues
                .filter((c) => c.direction === 'down')
                .map((clue) => {
                  const isActive =
                    selectedClueNumber === clue.number && direction === 'down';
                  return (
                    <div
                      key={clue.number}
                      onClick={() => handleSelectClue(clue)}
                      className={`p-3 rounded-xl cursor-pointer transition-all text-xs leading-relaxed ${
                        isActive
                          ? 'bg-emerald-950 text-white shadow-xs font-medium'
                          : 'bg-[#FBF9F5] text-stone-700 hover:bg-stone-100 border border-stone-100'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`h-5 w-5 rounded-full flex items-center justify-center font-mono font-bold text-[11px] ${
                          isActive ? 'bg-amber-300 text-emerald-950' : 'bg-stone-200 text-stone-700'
                        }`}>
                          {clue.number}
                        </span>
                        <span className={`text-[10px] uppercase font-semibold tracking-wider ${
                          isActive ? 'text-amber-200' : 'text-stone-400'
                        }`}>
                          {t.quiz.categoryLabels[clue.category]} · {clue.answer.length} {({ id: 'Huruf', en: 'Letters', ar: 'أحرف', tr: 'Harf' } as const)[currentLang]}
                        </span>
                      </div>
                      <p>{clue.clue}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* Completion Modal / Score Summary */}
      {isSubmitted && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in"
        >
          <div className="w-full max-w-md rounded-3xl bg-[#FBF9F5] p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 text-center">
            <div className="h-16 w-16 mx-auto rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md mb-4">
              <Trophy className="h-9 w-9" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
              {t.quiz.resultTitle}
            </span>

            <h2 className="font-serif-title text-4xl font-bold text-emerald-950 mt-1 mb-2">
              {quizScore} <span className="text-lg font-sans text-stone-400">/ 100</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              {quizScore >= 80
                ? ({ id: 'Luar biasa! Pemahamanmu tentang hubungan Indonesia–Turki sangat baik.', en: 'Excellent! You have a strong understanding of Indonesia–Türkiye relations.', ar: 'ممتاز! لديك فهم جيد للعلاقات الإندونيسية التركية.', tr: 'Harika! Endonezya–Türkiye ilişkilerini çok iyi anladınız.' } as const)[currentLang]
                : ({ id: 'Bagus! Kamu telah menyelesaikan evaluasi sejarah hubungan kedua negara.', en: 'Good work! You have completed the review of the two countries’ history.', ar: 'أحسنت! لقد أكملت مراجعة تاريخ العلاقات بين البلدين.', tr: 'Güzel! İki ülkenin ilişkileriyle ilgili değerlendirmeyi tamamladınız.' } as const)[currentLang]}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <span className="text-[11px] text-stone-500 block mb-0.5">
                  {t.quiz.resultCorrectAnswers}
                </span>
                <span className="font-mono text-base font-bold text-emerald-900">
                  {correctCount} / {totalQuestions}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <span className="text-[11px] text-stone-500 block mb-0.5">
                  {t.quiz.resultTimeLabel}
                </span>
                <span className="font-mono text-base font-bold text-stone-900">
                  {formatTime(secondsElapsed)}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2.5">


              <button
                onClick={onReviewMaterials}
                className="w-full py-2.5 px-4 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                {t.quiz.btnLearnAgain}
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-stone-500 hover:text-stone-800 underline underline-offset-4 cursor-pointer pt-1"
              >
                {t.quiz.resultReviewCTA}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
