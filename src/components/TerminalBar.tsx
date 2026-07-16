"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTerminal, HistoryLine } from './TerminalContext';

const virtualFS: Record<string, string[]> = {
  '/': ['projects/', 'writeups/', 'aboutme/', 'resume.pdf'],
  '/projects': ['wifi-scanner/', 'battleship/'],
  '/writeups': ['picoctf.md', 'htb-machine.md']
};

const routes: Record<string, string> = {
  'cd aboutme/': '/about',
  'cd projects/': '/projects',
  'cd writeups/': '/writeups',
  'cd ~': '/',
  'cd home': '/',
  'cd ..': '/',
  'wget resume.pdf': '/resume'
};

const COMMANDS = [...Object.keys(routes), 'ls', 'pwd', 'help', 'clear'];

export default function TerminalInput() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname(); 
  
  const { addToHistory, clearHistory } = useTerminal();

  // 🧹 THE CLEAN SLATE: Wipe history whenever the URL route changes
  useEffect(() => {
    clearHistory();
  }, [pathname, clearHistory]);

  const handleWrapperClick = () => inputRef.current?.focus();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      if (!cmd) return;

      const inputLog: HistoryLine = { id: Date.now(), type: 'input', text: `jinxuan@portfolio:${pathname}$ ${cmd}` };
      const newLines: HistoryLine[] = [inputLog];

      if (cmd === 'clear') {
        clearHistory();
        setInput('');
        return;
      } 
      else if (cmd === 'ls') {
        const files = virtualFS[pathname] || [];
        const outputText = files.length > 0 ? files.join('   ') : 'Directory is empty.';
        newLines.push({ id: Date.now() + 1, type: 'output', text: outputText });
        addToHistory(newLines);
      } 
      else if (cmd === 'pwd') {
        newLines.push({ id: Date.now() + 1, type: 'output', text: `/home/jinxuan${pathname}` });
        addToHistory(newLines);
      }
      else if (cmd === 'help') {
        newLines.push({ id: Date.now() + 1, type: 'output', text: `Available commands:\n${COMMANDS.join(', ')}` });
        addToHistory(newLines);
      } 
      else if (routes[cmd]) {
        if (cmd.startsWith('wget')) {
          const wgetLog = [
            `Connecting to portfolio.local... connected.`,
            `HTTP request sent, awaiting response... 200 OK`,
            `Length: 142857 (139K) [application/pdf]`,
            `Saving to: 'resume.pdf'`,
            ``,
            `resume.pdf        100%[===================>] 139.51K  --.-KB/s    in 0.02s`,
            ``,
            `'resume.pdf' saved [142857/142857]`,
            `Opening file...`
          ].join('\n');
          newLines.push({ id: Date.now() + 1, type: 'output', text: wgetLog });
        } else {
          newLines.push({ id: Date.now() + 1, type: 'output', text: `Navigating to ${routes[cmd]}...` });
        }

        addToHistory(newLines);
        
        // ⏱️ THE PROCESSING DELAY: 
        // Wait 800ms so the user can actually read the wget bar or "Navigating..." text 
        // BEFORE the page changes and the useEffect wipes the history clean!
        setTimeout(() => {
          router.push(routes[cmd]);
        }, 800); 
        
        setInput('');
        return;
      }  
      else {
        newLines.push({ id: Date.now() + 1, type: 'error', text: `Command not found: ${cmd}. Type 'help' for options.` });
        addToHistory(newLines);
      }

      setInput('');
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const currentInput = input.toLowerCase();
      const match = COMMANDS.find(c => c.startsWith(currentInput));
      if (match) setInput(match);
    }
  };

  return (
    <div 
      onClick={handleWrapperClick}
      className="fixed bottom-0 w-full bg-nord-0/95 backdrop-blur-sm border-t border-nord-3 cursor-text font-mono z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex w-full text-sm md:text-base py-4">
          <span className="text-nord-14 font-bold mr-2 shrink-0 select-none">
            jinxuan@portfolio:
          </span>
          <span className="text-nord-8 font-bold mr-3 shrink-0 select-none">
            {pathname}$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-nord-4 outline-none flex-grow caret-nord-13"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}