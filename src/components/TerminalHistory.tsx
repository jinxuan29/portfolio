"use client";

import { useEffect, useRef } from 'react';
import { useTerminal } from './TerminalContext';

export default function TerminalHistory() {
  const { history } = useTerminal();
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the main window to the bottom when new commands are added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (history.length === 0) return null;

  return (
    <div className="border-t border-nord-3 pt-6 space-y-2 font-mono max-w-4xl mx-auto">
      {history.map((line) => (
        <div key={line.id} className="text-sm md:text-base leading-relaxed">
          {line.type === 'input' && <span className="text-nord-4">{line.text}</span>}
          {line.type === 'output' && <span className="text-nord-8 font-bold whitespace-pre-wrap">{line.text}</span>}
          {line.type === 'error' && <span className="text-nord-11">{line.text}</span>}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}