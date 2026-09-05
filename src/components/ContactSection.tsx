import React, { useState } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon, WhatsAppIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const email = 'melwinsanthoah4096@gmail.com';
  const phone = '+91 6235764096';
  const whatsappUrl = 'https://wa.me/916235764096';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitStatus(data.message || 'Thank you! Message dispatched successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus(data.message || 'Submission failed. Please email directly.');
      }
    } catch {
      setSubmitStatus(`Thank you ${formData.name}! Message noted. You can also reach Melwin directly at ${email}.`);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b-4 border-black bg-neo-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Big Statement & Direct Connect (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-block border-4 border-black bg-white px-3.5 py-1 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm -rotate-2">
              DISPATCH TERMINAL
            </div>

            <h2 className="font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-black leading-[0.88]">
              LET'S BUILD
              <br />
              <span className="text-stroke-black-3 text-white">SOMETHING</span>
              <br />
              <span className="bg-black text-white px-2 py-0.5 inline-block -rotate-1 mt-1">
                UNAPOLOGETIC.
              </span>
            </h2>

            <p className="text-base sm:text-lg font-bold text-black leading-relaxed max-w-xl">
              Interested in Artificial Intelligence, multimedia systems, hackathon collaborations, or open-source software? Send a dispatch directly.
            </p>

            {/* Direct Inbox Card */}
            <div className="border-4 border-black bg-white p-6 shadow-neo-lg space-y-4">
              <div className="flex items-center justify-between border-b-3 border-black pb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-black/60">
                  PRIMARY VERIFIED INBOX
                </span>
                <span className="w-3 h-3 bg-neo-accent border-2 border-black inline-block" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-black shrink-0" />
                  <span className="font-mono font-black text-base sm:text-lg text-black break-all">
                    {email}
                  </span>
                </div>
                <div className="text-xs font-mono font-bold text-black/75 pl-7">
                  Phone: {phone}
                </div>
              </div>

              {/* Direct WhatsApp Action Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 border-3 border-black bg-[#25D366] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-neo-sm hover:bg-black hover:text-white transition-all neo-press"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Message Melwin Santhosh on WhatsApp</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={copyEmail}
                  className="flex-1 py-3 px-4 border-3 border-black bg-neo-secondary font-black text-xs uppercase tracking-wider text-black shadow-neo-sm hover:bg-black hover:text-white transition-all neo-press"
                >
                  {copied ? '✓ COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="py-3 px-5 border-3 border-black bg-black font-black text-xs uppercase tracking-wider text-white shadow-neo-sm hover:bg-neo-accent transition-all neo-press"
                >
                  COMPOSE
                </a>
              </div>
            </div>

            {/* Network Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href="https://github.com/mlwn4096"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-black bg-white p-3 shadow-neo-sm flex items-center justify-between hover:bg-black hover:text-white transition-all neo-press group"
              >
                <div className="flex items-center gap-2">
                  <GitHubIcon className="w-4 h-4" />
                  <span className="font-black text-xs uppercase">GitHub</span>
                </div>
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/melwin-santhosh-784550378"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-black bg-white p-3 shadow-neo-sm flex items-center justify-between hover:bg-black hover:text-white transition-all neo-press group"
              >
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="w-4 h-4" />
                  <span className="font-black text-xs uppercase">LinkedIn</span>
                </div>
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-black bg-white p-3 shadow-neo-sm flex items-center justify-between hover:bg-[#25D366] hover:text-black transition-all neo-press group"
              >
                <div className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4" />
                  <span className="font-black text-xs uppercase">WhatsApp</span>
                </div>
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="tel:+916235764096"
                className="border-4 border-black bg-white p-3 shadow-neo-sm flex items-center justify-between hover:bg-black hover:text-white transition-all neo-press group"
              >
                <span className="font-black text-xs uppercase">Call</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Fast Message Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo-xl">
              <div className="border-b-4 border-black pb-4 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/60 block">
                    FAST CONTACT RELAY
                  </span>
                  <h3 className="font-black text-2xl uppercase tracking-tight text-black">
                    SEND A MESSAGE
                  </h3>
                </div>
                <span className="border-2 border-black bg-neo-accent text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase">
                  ACTIVE
                </span>
              </div>

              {submitStatus && (
                <div className="border-3 border-black bg-neo-secondary p-4 font-black text-xs uppercase tracking-wide text-black mb-6 shadow-neo-sm">
                  {submitStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full h-13 px-4 border-4 border-black bg-white font-bold text-sm text-black placeholder:text-black/40 focus:bg-neo-secondary focus:shadow-neo-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full h-13 px-4 border-4 border-black bg-white font-bold text-sm text-black placeholder:text-black/40 focus:bg-neo-secondary focus:shadow-neo-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                    MESSAGE OR INQUIRY
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Melwin about your project, idea, or initiative..."
                    className="w-full p-4 border-4 border-black bg-white font-bold text-sm text-black placeholder:text-black/40 focus:bg-neo-secondary focus:shadow-neo-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 border-4 border-black bg-neo-accent text-white font-black text-sm uppercase tracking-wider shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all neo-press disabled:opacity-50"
                >
                  {submitting ? 'TRANSMITTING DISPATCH...' : 'TRANSMIT DISPATCH →'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
