import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "mail.mohammedabeeth@gmail.com";
  const phoneNumber = "+91 90800 81060";
  const linkedInUrl = "https://linkedin.com/in/mohammed-abeeth";
  const gitHubUrl = "https://github.com/mailmohammedabeeth-code";
  const whatsAppUrl = "https://wa.me/919080081060";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-8 sm:py-10 relative overflow-hidden bg-[#000000]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3 shadow-sm">
            <span>// 07 CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            LET'S <span className="text-[#FF453A]">CONNECT</span> & CREATE.
          </h2>
          <div className="w-16 h-1 bg-[#FF453A] rounded-full mx-auto mt-3 mb-3" />
          <p className="text-sm sm:text-base text-[#A0A0A0] font-mono leading-relaxed">
            Open to Software Engineering, Python Development, and Cloud Engineering opportunities.
          </p>
        </div>

        {/* Premium Four-Card Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          
          {/* CARD 01 — WHATSAPP DIRECT */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-[#101010] border border-[#292929] hover:border-[#FF453A] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,69,58,0.15)] min-h-[190px]"
          >
            <div>
              <MessageSquare className="w-6 h-6 text-[#FF453A] mb-3" />
              <div className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
                WHATSAPP DIRECT
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-1.5 font-mono">
                {phoneNumber}
              </div>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#FF453A]">
              <span>Chat Instantly</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* CARD 02 — EMAIL ADDRESS */}
          <div 
            className="p-5 sm:p-6 rounded-2xl bg-[#101010] border border-[#292929] hover:border-[#FF453A] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,69,58,0.15)] min-h-[190px]"
          >
            <div>
              <Mail className="w-6 h-6 text-[#FF453A] mb-3" />
              <div className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
                EMAIL ADDRESS
              </div>
              <a
                href={`mailto:${emailAddress}`}
                className="text-sm sm:text-base font-bold text-white mt-1.5 truncate block hover:text-[#FF453A] transition-colors font-mono"
                title={emailAddress}
              >
                {emailAddress}
              </a>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#292929] flex items-center justify-between text-xs font-mono">
              <button
                onClick={handleCopyEmail}
                className="text-[#FF453A] hover:underline flex items-center justify-between w-full cursor-pointer group/btn"
                title="Copy email to clipboard"
              >
                <span className="font-mono">{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <Copy className="w-4 h-4 text-[#FF453A] group-hover/btn:scale-110 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* CARD 03 — LINKEDIN */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-[#101010] border border-[#292929] hover:border-[#FF453A] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,69,58,0.15)] min-h-[190px]"
          >
            <div>
              <Linkedin className="w-6 h-6 text-[#FF453A] mb-3" />
              <div className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
                LINKEDIN
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-1.5 font-mono">
                mohammedabeeth
              </div>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#FF453A]">
              <span>Connect</span>
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
          </a>

          {/* CARD 04 — GITHUB LAB */}
          <a
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-[#101010] border border-[#292929] hover:border-[#FF453A] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,69,58,0.15)] min-h-[190px]"
          >
            <div>
              <Github className="w-6 h-6 text-[#FF453A] mb-3" />
              <div className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
                GITHUB LAB
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-1.5 font-mono">
                mailmohammedabeeth-code
              </div>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#FF453A]">
              <span>Explore Code</span>
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
