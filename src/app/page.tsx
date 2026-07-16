export default function Home() {
  return (
    <div className="flex flex-col space-y-10 animate-fade-in font-mono max-w-4xl mx-auto pb-10">
      
      {/* Header Section */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-nord-8 tracking-tight">
          Yen Jin Xuan
        </h1>
        <h2 className="text-xl md:text-2xl text-nord-4">
          Cybersecurity Student | CTF Enthusiast | Sleep Deprived 
        </h2>
        <p className="text-nord-4 leading-relaxed max-w-2xl text-sm md:text-base">
          Always Tired, always curious, always getting distracted. <br></br> Too much to learn yet too little time.  
        </p>
      </header>

      {/* System Manual / Command Reference */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-nord-3 pb-2">
          <span className="text-nord-13 text-xl font-bold">System Manual</span>
          <span className="text-nord-3 text-sm">::</span>
          <span className="text-nord-4 text-sm">Command Reference</span>
        </div>
        
        <p className="text-nord-4 text-sm md:text-base">
          System is online. Interact with the portfolio using standard UNIX-like commands in the prompt below. 
          Press <kbd className="px-1.5 py-0.5 bg-nord-1 border border-nord-3 rounded text-nord-8 text-xs font-bold">Tab</kbd> to autocomplete, and <kbd className="px-1.5 py-0.5 bg-nord-1 border border-nord-3 rounded text-nord-8 text-xs font-bold">Enter</kbd> to execute.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          
          {/* cd command */}
          <div className="bg-nord-1/40 p-5 rounded border border-nord-3 space-y-3 hover:border-nord-8/50 transition-colors group">
            <div className="flex items-baseline gap-2">
              <span className="text-nord-14 font-bold text-lg group-hover:text-nord-8 transition-colors">cd</span>
              <span className="text-nord-3 text-xs italic">&lt;directory&gt;</span>
            </div>
            <p className="text-nord-4 leading-relaxed">Change your current working directory to navigate through projects, labs, and write-ups.</p>
            <div className="mt-3 pt-3 border-t border-nord-3/30">
              <span className="text-nord-3 text-xs block mb-1.5 uppercase tracking-wider">Usage Example</span>
              <code className="text-nord-8 text-sm bg-nord-0/50 px-2 py-1 rounded border border-nord-3/50">cd projects</code>
            </div>
          </div>
          
          {/* cat command */}
          <div className="bg-nord-1/40 p-5 rounded border border-nord-3 space-y-3 hover:border-nord-8/50 transition-colors group">
            <div className="flex items-baseline gap-2">
              <span className="text-nord-14 font-bold text-lg group-hover:text-nord-8 transition-colors">cat</span>
              <span className="text-nord-3 text-xs italic">&lt;filename&gt;</span>
            </div>
            <p className="text-nord-4 leading-relaxed">Read and display the contents of text files, such as my background, methodologies, or personal interests.</p>
            <div className="mt-3 pt-3 border-t border-nord-3/30">
              <span className="text-nord-3 text-xs block mb-1.5 uppercase tracking-wider">Usage Example</span>
              <code className="text-nord-8 text-sm bg-nord-0/50 px-2 py-1 rounded border border-nord-3/50">cat aboutme.txt</code>
            </div>
          </div>

          {/* ls command */}
          <div className="bg-nord-1/40 p-5 rounded border border-nord-3 space-y-3 hover:border-nord-8/50 transition-colors group">
            <div className="flex items-baseline gap-2">
              <span className="text-nord-14 font-bold text-lg group-hover:text-nord-8 transition-colors">ls</span>
            </div>
            <p className="text-nord-4 leading-relaxed">List all available directories and files in your current path to discover what you can interact with next.</p>
            <div className="mt-3 pt-3 border-t border-nord-3/30">
              <span className="text-nord-3 text-xs block mb-1.5 uppercase tracking-wider">Usage Example</span>
              <code className="text-nord-8 text-sm bg-nord-0/50 px-2 py-1 rounded border border-nord-3/50">ls</code>
            </div>
          </div>

          {/* wget command */}
          <div className="bg-nord-1/40 p-5 rounded border border-nord-3 space-y-3 hover:border-nord-8/50 transition-colors group">
            <div className="flex items-baseline gap-2">
              <span className="text-nord-14 font-bold text-lg group-hover:text-nord-8 transition-colors">wget</span>
              <span className="text-nord-3 text-xs italic">&lt;filename&gt;</span>
            </div>
            <p className="text-nord-4 leading-relaxed">Retrieve and download static files from the server, such as my professional resume or project assets.</p>
            <div className="mt-3 pt-3 border-t border-nord-3/30">
              <span className="text-nord-3 text-xs block mb-1.5 uppercase tracking-wider">Usage Example</span>
              <code className="text-nord-8 text-sm bg-nord-0/50 px-2 py-1 rounded border border-nord-3/50">wget resume.pdf</code>
            </div>
          </div>

          {/* Utility commands */}
          <div className="bg-nord-1/40 p-5 rounded border border-nord-3 space-y-3 hover:border-nord-8/50 transition-colors group md:col-span-2">
            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="text-nord-14 font-bold text-lg group-hover:text-nord-8 transition-colors">clear</span>
              <span className="text-nord-3 text-xs italic">wipe buffer</span>
              <span className="text-nord-3">|</span>
              <span className="text-nord-14 font-bold text-lg group-hover:text-nord-8 transition-colors">help</span>
              <span className="text-nord-3 text-xs italic">list commands</span>
              <span className="text-nord-3">|</span>
              <span className="text-nord-14 font-bold text-lg group-hover:text-nord-8 transition-colors">pwd</span>
              <span className="text-nord-3 text-xs italic">print directory</span>
            </div>
            <p className="text-nord-4 leading-relaxed">Standard utility commands to manage your terminal session. Use <code className="text-nord-8">clear</code> to reset the output buffer below, or <code className="text-nord-8">help</code> if you get lost.</p>
          </div>

        </div>
      </section>

      {/* Interactive Hint */}
      <section className="flex items-start gap-3 bg-nord-1/20 border border-nord-3/50 p-4 rounded text-sm">
        <span className="text-nord-13 text-lg leading-none mt-0.5">💡</span>
        <p className="text-nord-4">
          <span className="text-nord-13 font-bold">Tips:</span> Not sure what files are available in the current directory? Just type <code className="text-nord-8 bg-nord-0 px-1.5 py-0.5 rounded border border-nord-3/50 text-xs">ls</code> and hit Enter to reveal your options!
        </p>
      </section>

    </div>
  );
}