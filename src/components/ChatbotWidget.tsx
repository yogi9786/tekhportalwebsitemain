import React, { useState, useRef, useEffect } from "react";
import { BotAvatar } from "bot-avatars";
import { 
  X, 
  Send, 
  Sparkles, 
  Download, 
  Minimize2, 
  Maximize2,
  ExternalLink
} from "lucide-react";
import brochurePdf from "../assets/Tekhportal Brochure .pdf";

interface ChatbotWidgetProps {
  onOpenAudit: () => void;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actionButtons?: {
    label: string;
    action: () => void;
    icon?: React.ComponentType<{ className?: string }>;
    externalUrl?: string;
  }[];
}

// Structured Knowledge Base & Agency Schema
const AGENCY_KNOWLEDGE = {
  name: "Tekhportal Digital Marketing Agency",
  location: "Yelahanka, Bengaluru, Karnataka 560064",
  phone: "+91 90662 34321",
  whatsappUrl: "https://wa.me/919066234321",
  email: "tekhportal@gmail.com",
  packages: [
    { name: "Starter Package", price: "₹25,000 / mo", bestFor: "Brands starting organic & social foundation" },
    { name: "Turbo Package", price: "₹55,000 / mo", bestFor: "High-growth brands scaling Google/Meta PPC & SEO" },
    { name: "Supersonic Package", price: "Custom Scope", bestFor: "Enterprise omni-channel scale & engineering" }
  ],
  services: [
    "Search Engine Optimization (SEO)",
    "Paid Advertising (Google & Meta PPC)",
    "Website Design & Development",
    "Content Marketing & Copywriting",
    "Graphic Design & Brand Creatives",
    "Video Marketing & Short-form Reels",
    "Social Media Performance Management",
    "Local SEO & Google Business Profile",
    "E-Commerce Marketing & Shopify Scale",
    "UI/UX Experience Design",
    "Lead Generation & Funnel Engineering",
    "Email & WhatsApp Marketing Automation"
  ]
};

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenAudit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Hi! Welcome to Tekhportal. I'm your AI Growth Assistant. How can I help scale your brand today?",
      timestamp: "Just now",
      actionButtons: [
        {
          label: "⚡ Explore 12 Services",
          action: () => handleSendPreset("What services does Tekhportal provide?")
        },
        {
          label: "💰 Pricing & Packages",
          action: () => handleSendPreset("What are your pricing packages?")
        },
        {
          label: "📥 Download Brochure",
          action: () => handleSendPreset("Can I get the agency brochure?")
        },
        {
          label: "🚀 Free Growth Audit",
          action: () => {
            setIsOpen(false);
            onOpenAudit();
          }
        }
      ]
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (userQuery: string): { text: string; actionButtons?: Message["actionButtons"] } => {
    const q = userQuery.toLowerCase();

    // 1. Pricing / Cost queries
    if (q.includes("price") || q.includes("cost") || q.includes("package") || q.includes("rate") || q.includes("fee")) {
      return {
        text: `Here is our transparent monthly pricing framework:\n\n• Starter Package: ₹25,000/mo (SEO, Social, Content & Consultation)\n• Turbo Growth: ₹55,000/mo (Full Google/Meta PPC, Web, SEO & Video Reels)\n• Supersonic: Custom Enterprise Scope.\n\nAll packages include month-to-month flexibility!`,
        actionButtons: [
          {
            label: "🚀 Claim Free Growth Audit",
            action: () => {
              setIsOpen(false);
              onOpenAudit();
            }
          },
          {
            label: "💬 WhatsApp for Custom Quote",
            action: () => window.open(AGENCY_KNOWLEDGE.whatsappUrl, "_blank"),
            icon: ExternalLink
          }
        ]
      };
    }

    // 2. Services queries
    if (q.includes("service") || q.includes("seo") || q.includes("ads") || q.includes("web") || q.includes("ppc") || q.includes("meta") || q.includes("google") || q.includes("video") || q.includes("design")) {
      return {
        text: `Tekhportal delivers 12 data-backed growth services engineered for measurable ROI:\n\n1. Technical SEO & Local Search (GMB)\n2. Paid Advertising (Google, Meta, YouTube PPC)\n3. Custom Web Design & Headless Development\n4. Video Marketing & High-CTR Reels\n5. Lead Generation & Funnel Engineering\n6. Brand Identity & Graphic Design\n...and 6 more specialized solutions.`,
        actionButtons: [
          {
            label: "📥 Download 2026 Brochure",
            action: () => window.open(brochurePdf, "_blank"),
            icon: Download
          },
          {
            label: "🎯 Get Specific Service Audit",
            action: () => {
              setIsOpen(false);
              onOpenAudit();
            }
          }
        ]
      };
    }

    // 3. Brochure queries
    if (q.includes("brochure") || q.includes("pdf") || q.includes("download") || q.includes("deck")) {
      return {
        text: `You can download our complete 2026 Growth Brochure directly! It covers all 12 services specifications, conversion blueprints, and ROI benchmarks.`,
        actionButtons: [
          {
            label: "📄 View / Download Brochure PDF",
            action: () => window.open(brochurePdf, "_blank"),
            icon: Download
          }
        ]
      };
    }

    // 4. Contact / Office location queries
    if (q.includes("contact") || q.includes("phone") || q.includes("number") || q.includes("whatsapp") || q.includes("email") || q.includes("office") || q.includes("bengaluru") || q.includes("location") || q.includes("address")) {
      return {
        text: `📍 Headquarters: Yelahanka, Bengaluru, Karnataka 560064\n📞 Phone & WhatsApp: ${AGENCY_KNOWLEDGE.phone}\n✉️ Email: ${AGENCY_KNOWLEDGE.email}`,
        actionButtons: [
          {
            label: "💬 WhatsApp Us Directly",
            action: () => window.open(AGENCY_KNOWLEDGE.whatsappUrl, "_blank"),
            icon: ExternalLink
          },
          {
            label: "📝 Fill Consultation Form",
            action: () => {
              setIsOpen(false);
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }
        ]
      };
    }

    // 5. Default Fallback
    return {
      text: `Thanks for reaching out! Our team in Bengaluru can analyze your brand's SEO rankings, PPC efficiency, and acquisition costs. Would you like a free 360° growth audit or direct consultation?`,
      actionButtons: [
        {
          label: "🚀 Get Free 360° Growth Audit",
          action: () => {
            setIsOpen(false);
            onOpenAudit();
          }
        },
        {
          label: "💬 Talk on WhatsApp (+91 90662 34321)",
          action: () => window.open(AGENCY_KNOWLEDGE.whatsappUrl, "_blank"),
          icon: ExternalLink
        }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(query);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        timestamp: "Just now",
        actionButtons: reply.actionButtons
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendPreset = (presetText: string) => {
    handleSendMessage(presetText);
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 select-none">
      
      {/* Floating 3D Animated Bot Launcher */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
            setHasUnread(false);
          }}
          className="relative group w-14 h-14 sm:w-16 sm:h-16 bg-transparent border-0 shadow-none transition-transform duration-300 hover:scale-115 flex items-center justify-center cursor-pointer p-0 filter drop-shadow-xl focus:outline-none"
          aria-label="Open AI Growth Chatbot"
          title="Chat with Tekhportal Growth Assistant"
        >
          <BotAvatar
            type="clover"
            color="#10b981"
            face="mouth"
            state="default"
            size={58}
            shading="plastic"
            interactive={true}
          />
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div 
          className={`w-[92vw] sm:w-95 bg-[#07382c] text-white rounded-3xl border border-[#10b981]/30 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${
            isMinimized ? "h-16" : "h-125 sm:h-135"
          }`}
        >
          {/* Chat Window Header */}
          <div className="px-4 py-3.5 bg-[#05281f] border-b border-[#10b981]/20 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
                  <span>Tekhportal AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                </h3>
                <span className="text-[10px] text-[#a7f3d0] block">
                  Online · Instant Response
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-full hover:bg-white/10 text-zinc-300 transition-colors cursor-pointer"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-zinc-300 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 bg-[#07382c]/95 text-xs">
                
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line shadow-xs ${
                        msg.sender === "user"
                          ? "bg-[#10b981] text-[#07382c] font-semibold rounded-br-xs"
                          : "bg-[#0b4839] text-zinc-100 border border-[#10b981]/20 rounded-bl-xs"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Action buttons attached to bot message */}
                    {msg.actionButtons && msg.actionButtons.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                        {msg.actionButtons.map((btn, idx) => {
                          const BtnIcon = btn.icon;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={btn.action}
                              className="px-2.5 py-1 rounded-full bg-[#10b981]/15 hover:bg-[#10b981] hover:text-[#07382c] text-[#a7f3d0] border border-[#10b981]/35 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 shadow-xs"
                            >
                              <span>{btn.label}</span>
                              {BtnIcon && <BtnIcon className="w-3 h-3" />}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <span className="text-[9px] text-zinc-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 p-2.5 bg-[#0b4839] border border-[#10b981]/20 rounded-2xl w-20 text-[#10b981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-[#05281f] border-t border-[#10b981]/20">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="chatbot-form-wrapper"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask about SEO, Ads, Pricing..."
                    className="chatbot-input"
                  />

                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="w-7 h-7 rounded-full bg-[#10b981] text-[#07382c] disabled:opacity-40 flex items-center justify-center hover:bg-[#fbb753] transition-all cursor-pointer shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                <div className="mt-1.5 text-center">
                  <a
                    href={AGENCY_KNOWLEDGE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#a7f3d0] hover:text-[#fbb753] font-semibold transition-colors inline-flex items-center gap-1"
                  >
                    <span>Prefer WhatsApp? Chat directly on +91 90662 34321</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </>
          )}

        </div>
      )}

    </div>
  );
};
