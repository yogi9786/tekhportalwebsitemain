import React, { useState } from "react";
import type { ServiceCodeSnippet } from "../../types/serviceDetail";
import { Code, Copy, Check, Terminal, FileCode } from "lucide-react";

interface ServiceCodeShowcaseProps {
  codeSnippet: ServiceCodeSnippet;
  serviceTitle: string;
}

export const ServiceCodeShowcase: React.FC<ServiceCodeShowcaseProps> = ({
  codeSnippet,
  serviceTitle
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-[#0c1310] text-white py-10 sm:py-14 md:py-18 border-b border-[#07382c]/20">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#a7f3d0] bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
            <Code className="w-3.5 h-3.5 text-[#10b981]" />
            {serviceTitle} Technical Architecture & Code Implementation
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-black text-white tracking-tight uppercase">
            {codeSnippet.title}<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 sm:mt-2 max-w-xl mx-auto">
            {codeSnippet.description}
          </p>
        </div>

        {/* Code Box Container */}
        <div className="max-w-4xl mx-auto rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-[#070b09] border border-[#10b981]/25 shadow-2xl">
          
          {/* Top Window Bar */}
          <div className="px-3 sm:px-5 py-2.5 sm:py-3 bg-[#0e1713] border-b border-white/10 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-3.5 w-px bg-white/10 mx-1 shrink-0 hidden xs:block" />
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-300 font-mono truncate">
                <FileCode className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                <span className="truncate max-w-32.5 xs:max-w-45 sm:max-w-none">{codeSnippet.filename}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase px-1.5 sm:px-2 py-0.5 rounded bg-white/10 text-zinc-300 font-mono">
                {codeSnippet.language}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] sm:text-xs text-zinc-200 transition-colors cursor-pointer"
                title="Copy code"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[#10b981]" />
                    <span className="text-[10px] font-bold text-[#10b981]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span className="text-[10px] font-medium">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Syntax Code Body */}
          <div className="p-3 sm:p-5 md:p-6 overflow-x-auto font-mono text-[11px] sm:text-xs md:text-[13px] leading-relaxed text-emerald-100 bg-[#070b09] scrollbar-thin">
            <pre className="whitespace-pre">
              <code>{codeSnippet.code}</code>
            </pre>
          </div>

          {/* Key Architecture Highlights Bar */}
          <div className="px-3 sm:px-5 py-2.5 sm:py-3.5 bg-[#0e1713] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs">
            <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 shrink-0">
              <Terminal className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
              <span className="font-bold text-white text-[10px] sm:text-[11px] uppercase tracking-wider">Specifications:</span>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {codeSnippet.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[#a7f3d0] text-[9px] sm:text-[10px] font-medium"
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceCodeShowcase;
