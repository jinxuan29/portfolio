export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in pb-10">
      {/* Terminal-style Header */}
      <div className="flex items-center justify-between mb-4 border-b border-nord-3 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-nord-14 font-bold">jinxuan@portfolio</span>
          <span className="text-nord-4">:</span>
          <span className="text-nord-8 font-bold">~/</span>
          <span className="text-nord-4">$ cat resume.pdf | less</span>
        </div>
        
        <div className="flex gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-nord-1 border border-nord-3 px-3 py-1.5 rounded hover:bg-nord-3 hover:text-nord-8 transition-colors flex items-center gap-1.5"
          >
            🔗 Open in New Tab
          </a>
          <a
            href="/resume.pdf"
            download="Yen_Jin_Xuan_Resume.pdf"
            className="text-xs bg-nord-1 border border-nord-3 px-3 py-1.5 rounded hover:bg-nord-3 hover:text-nord-8 transition-colors flex items-center gap-1.5"
          >
            ⬇ Download
          </a>
        </div>
      </div>

      {/* The PDF Embed */}
      <div className="border border-nord-3 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-white">
        <iframe
          src="/resume.pdf"
          className="w-full h-[75vh] md:h-[85vh]"
          title="Yen Jin Xuan Resume"
        />
      </div> 
    </div>
  );
}