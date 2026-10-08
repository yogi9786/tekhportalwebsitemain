import React from "react";
import type { ServiceProcessStep } from "../../types/serviceDetail";
import { Calendar } from "lucide-react";

interface ServiceRoadmapTimelineProps {
  processSteps: ServiceProcessStep[];
  serviceTitle: string;
}

export const ServiceRoadmapTimeline: React.FC<ServiceRoadmapTimelineProps> = ({
  processSteps,
  serviceTitle
}) => {
  return (
    <section className="w-full bg-[#07382c] text-white py-12 sm:py-16 md:py-20 border-b border-[#0c4e3e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#a7f3d0] bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2.5">
            <Calendar className="w-3.5 h-3.5 text-[#10b981]" />
            Execution Roadmap &amp; Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-white tracking-tight uppercase">
            HOW WE EXECUTE {serviceTitle}<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-xl mx-auto">
            A structured, transparent 4-stage sprint cycle engineered to deliver rapid, measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0b4839] rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#10b981] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-[#fbb753] font-mono">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#a7f3d0] block mb-1.5">
                  Key Outputs:
                </span>
                <ul className="space-y-1 text-[11px] text-zinc-300">
                  {step.keyOutputs.map((out, oIdx) => (
                    <li key={oIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceRoadmapTimeline;
