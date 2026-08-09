"use client";

import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "General Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 md:py-20 bg-slate-50 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          Customer Support &amp; Assistance
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B192C] max-w-3xl mx-auto leading-tight">
          How can we help you today?
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Submit your question or query regarding loan eligibility, repayment schedules, or consent privacy. Our automated support ticket system will route your query to the dedicated team.
        </p>
      </section>

      {/* Main Support Query Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#00C9A7] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0B192C]">Submit a Customer Support Ticket</h2>
              <p className="text-xs text-slate-500">Fill in the details below to log a support request.</p>
            </div>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00C9A7] focus:ring-1 focus:ring-[#00C9A7]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00C9A7] focus:ring-1 focus:ring-[#00C9A7] bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Loan Eligibility &amp; Criteria</option>
                    <option>EMI Calculator Questions</option>
                    <option>Privacy &amp; Data Consent</option>
                    <option>Grievance &amp; Compliance</option>
                  </select>
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Brief summary of your query"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00C9A7] focus:ring-1 focus:ring-[#00C9A7]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Detailed Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please describe your question in detail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00C9A7] focus:ring-1 focus:ring-[#00C9A7]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#0B192C] hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 transition-colors"
              >
                <span>Submit Ticket</span>
                <Send className="w-4 h-4 text-[#00C9A7]" />
              </button>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950">
                Support Request Submitted Successfully!
              </h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                Thank you, <strong className="text-emerald-950">{formData.name}</strong>. Your ticket regarding &quot;{formData.subject}&quot; has been logged into our support system.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: "", category: "General Inquiry", subject: "", message: "" });
                }}
                className="px-6 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-semibold hover:bg-emerald-800 transition-colors mt-2"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Security & Transparency Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 text-xs flex items-center gap-4">
          <ShieldCheck className="w-8 h-8 text-[#00C9A7] flex-shrink-0" />
          <p className="leading-relaxed">
            LoanCentral provides direct web ticketing for customer query resolution in accordance with RBI Digital Lending Framework standards. All submitted information is encrypted using 256-bit SSL protocols.
          </p>
        </div>
      </section>

    </div>
  );
}
