import { useState, useEffect } from "react";
import { X, MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "923002176111"; // MST international format (no + or spaces)
const DEFAULT_MESSAGE =
  "Hello MST Team, I am interested in a trade inquiry regarding your leather products. Please advise on availability and pricing.";

const QUICK_PROMPTS = [
  "Request leather samples & swatches",
  "Inquire about wet blue availability",
  "Get export pricing & lead times",
  "Ask about LWG certifications",
];

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Show after 3s scroll delay
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Stop pulsing after first open
  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

  const handleSend = (customMsg?: string) => {
    const text = encodeURIComponent(customMsg || message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3 pointer-events-none" aria-label="WhatsApp Trade Inquiry">
      {/* Expanded chat panel */}
      <div
        className={`transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto visible"
            : "opacity-0 scale-90 pointer-events-none invisible"
        }`}
        aria-hidden={!open}
      >
        <div className="w-80 bg-[#0c0f14] border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#128c7e] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <img src="/logo.png" alt="MST Logo" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">MST Trade Desk</p>
                <p className="text-[11px] text-green-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                  Typically replies within hours
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="px-4 pt-5 pb-3">
            <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-[#111] max-w-[90%] shadow-sm">
              <p className="leading-relaxed">
                👋 Hi! I'm the MST Trade Desk. How can we assist you with leather procurement today?
              </p>
              <p className="text-[10px] text-gray-500 text-right mt-1">MST</p>
            </div>
          </div>

          {/* Quick prompts */}
          <div className="px-4 pb-3 space-y-1.5">
            {QUICK_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="w-full text-left text-xs text-[#25d366] border border-[#25d366]/30 hover:bg-[#25d366]/10 rounded-xl px-3 py-2 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message input */}
          <div className="px-4 pb-4 pt-2 border-t border-white/10">
            <div className="flex gap-2 items-end">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                placeholder="Type your inquiry..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-gray-500 resize-none focus:outline-none focus:border-[#25d366]/50 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                className="w-9 h-9 rounded-full bg-[#25d366] hover:bg-[#1ebd5b] flex items-center justify-center flex-shrink-0 transition-colors shadow"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 text-center">
              Opens WhatsApp · Muhammad Shafi Tanneries
            </p>
          </div>
        </div>
      </div>

      {/* FAB button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`pointer-events-auto cursor-pointer relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 focus:ring-offset-background ${
          open ? "bg-[#128c7e] scale-95" : "bg-[#25d366] hover:bg-[#1ebd5b] hover:scale-105"
        }`}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp trade inquiry"}
        aria-expanded={open}
      >
        {/* Pulse ring */}
        {pulse && !open && (
          <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-60" />
        )}
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Tooltip */}
      {!open && (
        <div className="absolute right-16 bottom-1.5 bg-black/80 border border-white/10 text-white text-xs font-medium px-3 py-2 rounded-xl whitespace-nowrap backdrop-blur-sm pointer-events-none select-none">
          Trade Inquiry via WhatsApp
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-black/80 border-r border-t border-white/10 rotate-45" />
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloat;
