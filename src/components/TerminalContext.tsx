"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type HistoryLine = {
  id: number;
  type: 'input' | 'output' | 'error';
  text: string;
};

type TerminalContextType = {
  history: HistoryLine[];
  addToHistory: (lines: HistoryLine[]) => void;
  clearHistory: () => void;
};

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<HistoryLine[]>([]);

  const addToHistory = useCallback((lines: HistoryLine[]) => {
    setHistory(prev => [...prev, ...lines]);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return (
    <TerminalContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) throw new Error('useTerminal must be used within TerminalProvider');
  return context;
}